import React from 'react';

import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export function NoAuthRoutes({ children }) {
  const isLogged = !!localStorage.getItem('@finances:token');

  return !isLogged ? children : <Navigate to="/" replace />;
}

NoAuthRoutes.defaultProps = {
  children: null,
};

NoAuthRoutes.propTypes = {
  children: propTypes.node,
};
