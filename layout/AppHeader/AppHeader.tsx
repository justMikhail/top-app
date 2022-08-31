import {AppHeaderProps} from './AppHeader.props';
import styles from './AppHeader.module.scss.module.scss';

export const AppHeader = ({...props}: AppHeaderProps): JSX.Element => {

  return (
    <header {...props}>
      HEADER
    </header>
  );
};

