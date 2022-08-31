import cn from 'classnames';
import {AppTitleProps} from './AppTitle.props';
import styles from './AppTitle.module.scss';

export const AppTitle = ({ tag, children }: AppTitleProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={cn(styles.title, styles.title_h1)}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(styles.title, styles.title_h2)}>{children}</h2>;
    case 'h3':
      return <h3 className={cn(styles.title, styles.title_h3)}>{children}</h3>;
    default:
      return <></>;
  }
};

