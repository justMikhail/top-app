import cn from 'classnames';
import {AppParagraphProps} from './AppParagraph.props';
import styles from './AppParagraph.module.scss';

export const AppParagraph = (props: AppParagraphProps): JSX.Element => {
  const {
    size = 'm',
    children,
    className,
    ...otherProps
  } = props;

  return (
    <p
      className={cn(styles.p, {
        [styles.p_s]: size === 's',
        [styles.p_m]: size === 'm',
        [styles.p_l]: size === 'l',
      })}
      {...otherProps}
    >
      {children}
    </p>
  );
};

