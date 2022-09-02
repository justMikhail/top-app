import {GetStaticProps} from 'next';
import {useState} from 'react';
import axios from 'axios';

import {IMenuItem} from '../types/menu.interface';

import {withAppLayout} from '../layout/AppLayout/AppLayout';
import {
  AppTitle,
  AppButton,
  AppParagraph,
  AppTag,
  AppRating,
} from '../components';

function HomePage({menuData, firstCategory}: IHomePageProps): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <AppTitle tag='h1'>Текст</AppTitle>
      <AppButton appearance='primary' arrow='right'>Кнопка</AppButton>
      <AppButton appearance='secondary' arrow='down'>Кнопка</AppButton>
      <AppParagraph size='l'>Большой</AppParagraph>
      <AppParagraph size='m'>Средний</AppParagraph>
      <AppParagraph size='s'>Маленький</AppParagraph>
      <AppTag size='m'>Средний</AppTag>
      <AppTag size='m' appearance='primary'>Средний</AppTag>
      <AppTag size='m' appearance='error'>Средний</AppTag>
      <AppTag size='m' appearance='success'>Средний</AppTag>
      <AppTag size='s'>Мал</AppTag>
      <AppRating rating={4}/>
      <AppRating rating={rating} isEditable setRating={setRating}/>
      {menuData.map((menuItem) => (<li key={menuItem._id.secondCategory}>{menuItem._id.secondCategory}</li>))}
    </>
  );
}

export default withAppLayout(HomePage);

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const firstCategory = 0;
  const { data: menuData } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menuData,
      firstCategory
    }
  };
};

interface IHomePageProps extends Record<string, unknown> {
  menuData: IMenuItem[];
  firstCategory: number;
}
