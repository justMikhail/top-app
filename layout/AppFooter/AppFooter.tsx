import cn from 'classnames';
import {format} from 'date-fns';
import {AppFooterProps} from './AppFooter.props';
import styles from './AppFooter.module.scss';

export const AppFooter = (props: AppFooterProps): JSX.Element => {
  const {
    className,
    ...otherProps
  } = props;

  return (
    <footer
      className={cn(className, styles.footer)}
      {...otherProps}
    >
      <div className={styles.copyright}>
        TopApp © 2021 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a
        className={styles.link}
        href="#"
        target="_blank"
      >
        Пользовательское соглашение
      </a>
      <a
        className={styles.link}
        href="#"
        target="_blank"
      >
        Политика конфиденциальности
      </a>
    </footer>
  );
};

