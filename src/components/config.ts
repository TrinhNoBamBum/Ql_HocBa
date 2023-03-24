

import path from 'path';
import { Component, lazy } from 'react'
import { Route } from 'react-router-dom';

export const Routes = {
  //admin 
  ADMIN:'admin',
  ADMINTEACHER:'',
  ADMINSTUDENT:'student',


  //student
  STUDENTMAIN:'',
  STUDENT:'student',
  DETAILCLASS:'detailclass',

  //main  
  MORALITY:'morality',
  FINALGRADE:'finalgrade',
  GRADEBOOK:'',
  DEMO:'demo',
  MAIN: 'main',//main/component

  //login
  LOGIN: 'login',
  REGISTER: 'register',

}


const Main = lazy(() => import(/* webpackChunkName: "Main" */ 'screens/Main'));


const Login=lazy(()=>import(/* webpackChunkName: "Main" */'screens/Login'));
const Student=lazy(()=>import(/* webpackChunkName: "Categories" */'screens/Student'))
const Body = lazy(() => import(/* webpackChunkName: "Categories" */'components/Body'));
const GradeBook=lazy(()=>import(/* webpackChunkName: "Categories" */'components/GradeBook'))
const StudentMain=lazy(()=>import(/* webpackChunkName: "Categories" */'components/StudentMain'))
const Morality=lazy(()=>import(/* webpackChunkName: "Categories" */'components/Morality'))
const FinalGrade=lazy(()=>import(/* webpackChunkName: "Categories" */'components/FinalGrade'))
const DetailClass=lazy(()=>import(/* webpackChunkName: "Categories" */'components/DetailClass'))
const Demo = lazy(() => import(/* webpackChunkName: "Categories" */ 'components/demo1'))
const AdminTeacher= lazy(() => import(/* webpackChunkName: "Categories" */ 'components/AdminTeacher'))
const AdminStudent= lazy(() => import(/* webpackChunkName: "Categories" */ 'components/AdminStudent'))





export const RouteConfig = [


  {
    path: Routes.MAIN,
    component: Main,
  },
  {
    path:Routes.LOGIN,
    component:Login
  }

];

export const AdminRoute=[
  {
    path:Routes.DEMO,
    component:Demo,
    extra:true
  },
  {
    path:Routes.ADMINTEACHER,
    component:AdminTeacher,
    extra:true
  },
  {
    path:Routes.ADMINSTUDENT,
    component:AdminStudent,
    extra:true
  }
]

export const StudentRoute=[
  {
    path: Routes.STUDENTMAIN,
    component: StudentMain,
    extra: true
  },
  {
    path:Routes.DEMO,
    component:Demo,
    extra:true
  },
  {
    path:Routes.DETAILCLASS,
    component:DetailClass,
    extra:true
  }
  
]



export const MainRoute = [
  {
    path: Routes.MORALITY,
    component: Morality,
    extra: true
  },
  {
    path: Routes.GRADEBOOK,
    component: GradeBook,
    extra: true
  },
  {
    path: Routes.DEMO,
    component: Demo,
    extra: true
  },
  {
    path:Routes.FINALGRADE,
    component:FinalGrade,
    extra:true
  }
 
]