import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Pages from 'pages';

import { NoAuthRoutes } from './noAuthRoutes';
import { PrivateRoutes } from './privateRoutes';

const routes = [
  { path: '/', element: <Pages.Home />, isPrivate: true },
  { path: '/login', element: <Pages.Login />, noAuth: true },
  { path: '/incomes', element: <Pages.Incomes />, isPrivate: true },
  { path: '/expenses', element: <Pages.Expenses />, isPrivate: true },
  { path: '/bank-accounts', element: <Pages.BankAccounts />, isPrivate: true },
  { path: '/categories', element: <Pages.Categories />, isPrivate: true },
  { path: '/my-profile', element: <Pages.MyProfile />, isPrivate: true },
];

function getElementType(route) {
  const { isPrivate, noAuth, element } = route;
  if (isPrivate) return <PrivateRoutes>{element}</PrivateRoutes>;
  if (noAuth) return <NoAuthRoutes>{element}</NoAuthRoutes>;
  return element;
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoutes>
              <Pages.Home />
            </PrivateRoutes>
          }
        />
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={getElementType(route)}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
