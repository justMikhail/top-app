import {FunctionComponent} from 'react';
import {AppLayoutProps} from './AppLayout.props';
import styles from './AppLayout.module.scss';
import {AppHeader} from '../AppHeader/AppHeader';
import {AppFooter} from '../AppFooter/AppFooter';
import {AppSidebar} from '../AppSidebar/AppSidebar';
import {AppContextProvider, IAppContext} from '../../context/app.context';

const AppLayout = ({children}: AppLayoutProps): JSX.Element => {

  return (
    <div className={styles.layout}>
      <AppHeader className={styles.header}/>
      <AppSidebar className={styles.sidebar}/>
      <main className={styles.content}>
        {children}
      </main>
      <AppFooter className={styles.footer}/>
    </div>
  );
};

export const withAppLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
  return function withAppLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menuData={props.menuData} firstCategory={props.firstCategory}>
        <AppLayout>
          <Component {...props}/>
        </AppLayout>
      </AppContextProvider>
    );
  };
};
