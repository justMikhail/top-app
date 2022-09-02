import {useContext} from 'react';
import {AppContext} from '../../context/app.context';

export const AppMenu = (): JSX.Element => {
  const {
    menuData,
    setMenuData,
    firstCategory
  } = useContext(AppContext);

  return (
    <ul>
      {menuData.map((menuItem) => (<li key={menuItem._id.secondCategory}>{menuItem._id.secondCategory}</li>))}
    </ul>
  );
};
