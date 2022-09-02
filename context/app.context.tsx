import { createContext, PropsWithChildren, useState } from 'react';
import {IMenuItem} from '../types/menu.interface';
import {ITopLevelCategory} from '../types/page.interface';

export interface IAppContext {
  menuData: IMenuItem[];
  firstCategory: ITopLevelCategory;
  setMenuData?: (newMenuData: IMenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menuData: [], firstCategory: ITopLevelCategory.Courses });

export const AppContextProvider = ({ menuData, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
  const [menuState, setMenuState] = useState<IMenuItem[]>(menuData);
  const setMenuData = (newMenu: IMenuItem[]) => {
    setMenuState(newMenu);
  };

  return <AppContext.Provider value={{ menuData: menuState, firstCategory, setMenuData }}>
    {children}
  </AppContext.Provider>;
};
