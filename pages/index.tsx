import {
  AppTitle,
  AppButton,
  AppParagraph,
  AppTag,
} from '../components';
import {AppRating} from '../components/AppRaiting/AppRating';
import {useState} from 'react';
import {AppLayout} from '../layout/AppLayout/AppLayout';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(2);

  return (
    <AppLayout>
      <AppTitle tag='h1'>Текст</AppTitle>
      <AppButton appearance='primary' arrow='right'>Кнопка</AppButton>
      <AppButton appearance='secondary' arrow='down'>Кнопка</AppButton>
      <AppParagraph size='l'>
          Большой
      </AppParagraph>
      <AppParagraph size='m'>
        Средний
      </AppParagraph>
      <AppParagraph size='s'>
        Маленький
      </AppParagraph>
      <AppTag size='m'>
        Средний
      </AppTag>
      <AppTag size='m' appearance='primary'>
        Средний
      </AppTag>
      <AppTag size='m' appearance='error'>
        Средний
      </AppTag>
      <AppTag size='m' appearance='success'>
        Средний
      </AppTag>
      <AppTag size='s'>
        Мал
      </AppTag>
      <AppRating rating={4}/>
      <AppRating rating={rating} isEditable setRating={setRating}/>
    </AppLayout>
  );
}
