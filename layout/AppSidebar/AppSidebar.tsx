import {AppSidebarProps} from './AppSidebar.props';
import styles from './AppLayout.module.scss';

export const AppSidebar = ({...props}: AppSidebarProps): JSX.Element => {

  return (
    <div {...props}>
      SIDEBAR
    </div>
  );
};

