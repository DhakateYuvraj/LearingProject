import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, i) => {
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./views/auth/handleRedirect/HandleRedirect'))
  },
  {
    exact: true,
    path: '/signin',
    component: lazy(() => import('./views/auth/signin/SignIn'))
  },
  {
    exact: true,
    path: '/signup',
    component: lazy(() => import('./views/auth/signup/SignUp'))
  },
  {
    path: '*',
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: '/users',
        component: lazy(() => import('./views/users/Users'))
      },
      {
        exact: true,
        path: '/students',
        component: lazy(() => import('./views/students/StudentManagment'))
      },
      {
        exact: true,
        path: '/students/add',
        component: lazy(() => import('./views/students/AddStudent'))
      },
      {
        exact: true,
        path: '/classRooms',
        component: lazy(() => import('./views/classRooms/ClassManagment'))
      },
      {
        exact: true,
        path: '/dashboard',
        component: lazy(() => import('./views/dashboard/DashDefault'))
      },
      {
        exact: true,
        path: '/basic/button',
        component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
      },
      {
        exact: true,
        path: '/basic/badges',
        component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
      },
      {
        exact: true,
        path: '/basic/breadcrumb',
        component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
      },
      {
        exact: true,
        path: '/basic/pagination',
        component: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
      },
      {
        exact: true,
        path: '/basic/collapse',
        component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
      },
      {
        exact: true,
        path: '/basic/tabs-pills',
        component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
      },
      {
        exact: true,
        path: '/basic/typography',
        component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
      },
      {
        exact: true,
        path: '/forms/form-basic',
        component: lazy(() => import('./views/forms/FormsElements'))
      },
      {
        exact: true,
        path: '/tables/bootstrap',
        component: lazy(() => import('./views/tables/BootstrapTable'))
      },
      {
        exact: true,
        path: '/charts/nvd3',
        component: lazy(() => import('./views/charts/nvd3-chart'))
      },
      {
        exact: true,
        path: '/maps/google-map',
        component: lazy(() => import('./views/maps/GoogleMaps'))
      },
      {
        exact: true,
        path: '/sample-page',
        component: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '/',
        exact: true,
        component: () => {
          <Redirect to={BASE_URL} />;
        }
      }
    ]
  }
];

export default routes;
