import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from '@/module/common/component/loading';
import { APP_KEYS } from '@/module/common/constants';
import { ProtectedPage, PublicPage } from '@/module/common/hocs';
import { COLORS } from '@/theme';

const Example = React.lazy(() =>
  import('../example/example').then((module) => ({
    default: module.Example
  }))
);

const Login = React.lazy(() =>
  import('../auth/page/login/login').then((module) => ({
    default: module.Login
  }))
);

const SingUp = React.lazy(() =>
  import('../auth/page/sing-up/sing-up').then((module) => ({
    default: module.SingUp
  }))
);

const HomeLayout = React.lazy(() =>
  import('../home-layout/home-layout').then((module) => ({
    default: module.HomeLayout
  }))
);

export const MainRouter = () => (
  <React.Suspense fallback={<Loader size='medium' height='auto' color={COLORS.green} />}>
    <Routes>
      <Route
        path={APP_KEYS.ROUTER_KEYS.LOGIN}
        element={
          <PublicPage>
            <Login />
          </PublicPage>
        }
      />

      <Route
        path={APP_KEYS.ROUTER_KEYS.SING_UP}
        element={
          <PublicPage>
            <SingUp />
          </PublicPage>
        }
      />
      <Route
        path={APP_KEYS.ROUTER_KEYS.HOME}
        element={
          <ProtectedPage>
            <HomeLayout />
          </ProtectedPage>
        }
      />

      <Route
        path={APP_KEYS.ROUTER_KEYS.EXAMPLE}
        element={
          <PublicPage>
            <Example />
          </PublicPage>
        }
      />
    </Routes>
  </React.Suspense>
);
