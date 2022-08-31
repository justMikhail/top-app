import {AppFooterProps} from './AppFooter.props';
import styles from './AppFooter.module.scss.module.scss';

export const AppFooter = ({...props}: AppFooterProps): JSX.Element => {

  return (
    <footer {...props}>
      FOOTER
    </footer>
  );
};

