import { lazy } from 'react'

export const Routes = {
  LOGIN: 'login',
  REGISTER: 'register',
  CATEGORIES: 'categories',
  PRODUCT_DETAIL: 'product-detail/:productId',
  MAIN: ''
}

const Login = lazy(() => import(/* webpackChunkName: "Login" */ 'screens/Login'));
const Register = lazy(() => import(/* webpackChunkName: "Register" */ 'screens/Register'));
const Main = lazy(() => import(/* webpackChunkName: "Main" */ 'screens/Main'));
const Categories = lazy(() => import(/* webpackChunkName: "Categories" */ 'components/Categories'));
const ProductDetail = lazy(() => import(/* webpackChunkName: "Categories" */ 'components/ProductDetail'));

export const RouteConfig = [
  {
    path: Routes.LOGIN,
    component: Login,
  },
  {
    path: Routes.REGISTER,
    component: Register,
  },
  {
    path: Routes.MAIN,
    component: Main,
  },
];

export const MainRoute = [
  {
    path: Routes.CATEGORIES,
    component: Categories,
    extra: true
  },
  {
    path: Routes.PRODUCT_DETAIL,
    component: ProductDetail,
    extra: true
  },
]