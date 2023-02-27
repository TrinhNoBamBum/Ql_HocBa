import path from 'path';
import { Component, lazy } from 'react'
import { Route } from 'react-router-dom';

export const Routes = {
  LOGIN: 'login',
  REGISTER: 'register',
  CATEGORIES: 'categories',
  CART:'cart',
  BLOG:'blog',
  CONTACT:'contact',
  BLOGDETAIL:'blogdetail',
  PRODUCT_DETAIL: 'product-detail/ :productId',  //product-detail/ :productId
  MAIN:'',
  BODY:''
}

const Login = lazy(() => import(/* webpackChunkName: "Login" */ 'components/Login-Register'));
const Register = lazy(() => import(/* webpackChunkName: "Register" */ 'screens/Register'));
const Main = lazy(() => import(/* webpackChunkName: "Main" */ 'screens/Main'));
const Categories = lazy(() => import(/* webpackChunkName: "Categories" */ 'components/Categories'));
const ProductDetail = lazy(() => import(/* webpackChunkName: "Categories" */ 'components/ProductDetail'));
const Body= lazy(()=> import (/* webpackChunkName: "Categories" */'components/Body'));
const Blog =lazy(()=> import (/* webpackChunkName: "Categories" */'components/Blog'));
const Contact=lazy(()=>import(/* webpackChunkName: "Categories" */'components/Contact'));
const BlogDetail =lazy(()=>import(/* webpackChunkName: "Categories" */'components/BlogDetail'));

const Cart = lazy(()=>import(/* webpackChunkName: "Categories" */ 'components/CartFashion'))




export const RouteConfig = [


  {
    path: Routes.MAIN,
    component: Main,
  },
];

export const MainRoute = [
{
  path:Routes.BODY,
  component:Body,
  extra:true
},
  {
    path: Routes.CATEGORIES,
    component: Categories,
    extra: true
  },
  {
    path: Routes.PRODUCT_DETAIL,
    component: ProductDetail,
    
  },
  {
    path:Routes.BLOG,
    component:Blog,
    extra:true
  },
  {
    path:Routes.CONTACT,
    component:Contact,
    extra:true
  },
  {
  path:Routes.BLOGDETAIL,
  component:BlogDetail,
  extra:true
  },
  {
    path:Routes.LOGIN,
    component:Login,
    extra:true
  },
  {
    path:Routes.CART,
    component:Cart,
    extra:true
  },
  {
    path:Routes.PRODUCT_DETAIL,
    component:ProductDetail,
    extra:true
  }

]