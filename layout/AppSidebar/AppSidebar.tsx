import {AppSidebarProps} from './AppSidebar.props';
import styles from './AppLayout.module.scss';
import {AppMenu} from '../AppMenu/AppMenu';

export const AppSidebar = ({...props}: AppSidebarProps): JSX.Element => {

  return (
    <aside {...props}>
      <AppMenu/>
    </aside>
  );
};

