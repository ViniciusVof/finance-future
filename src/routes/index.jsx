import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import * as Pages from 'pages';

const routes = [
  { path: '/', element: <Pages.Home /> },
  { path: '/about', element: <Pages.About /> },
];

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
