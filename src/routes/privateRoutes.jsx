import React from 'react';

import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export function PrivateRoutes({ children }) {
  const isLogged = !!localStorage.getItem('@finances:token');

  return isLogged ? children : <Navigate to="/login" replace />;
}

PrivateRoutes.defaultProps = {
  children: null,
};

PrivateRoutes.propTypes = {
  children: propTypes.node,
};
