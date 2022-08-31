import {AppLayoutProps} from './AppLayout.props';
import styles from './AppLayout.module.scss';
import {AppHeader} from '../AppHeader/AppHeader';
import {AppFooter} from '../AppFooter/AppFooter';
import {AppSidebar} from '../AppSidebar/AppSidebar';

export const AppLayout = ({children}: AppLayoutProps): JSX.Element => {

  return (
    <>
      <AppHeader/>
      <main>
        <AppSidebar/>
        <div>
          {children}
        </div>
      </main>
      <AppFooter/>
    </>
  );
};

