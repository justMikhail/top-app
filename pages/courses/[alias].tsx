import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next';
import axios from 'axios';
import {IMenuItem} from '../../types/menu.interface';
import {ITopPageModel} from '../../types/page.interface';
import {withAppLayout} from '../../layout/AppLayout/AppLayout';
import {ParsedUrlQuery} from 'querystring';
import {IProductModel} from '../../types/product.interface';

const firstCategory = 0;

function CoursePage(props: ICoursePageProps): JSX.Element {
const {pageData, menuData, productsData} = props;

  return (
    <>
      {productsData && productsData.length}
    </>
  );
}

export default withAppLayout(CoursePage);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menuData } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });

  return {
    paths: menuData.flatMap(menuItem => menuItem.pages.map(page => '/courses/' + page.alias)),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ICoursePageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return {notFound: true};
  const { data: menuData } = await axios.post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  const { data: pageData } = await axios.get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
  const { data: productsData } = await axios.post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
    category: pageData.category,
    limit: 10,
  });
  return {
    props: {
      menuData,
      firstCategory,
      pageData,
      productsData,
    }
  };
};

interface ICoursePageProps extends Record<string, unknown> {
  menuData: IMenuItem[];
  firstCategory: number;
  pageData: ITopPageModel;
  productsData: IProductModel[];
}
