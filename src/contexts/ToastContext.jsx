import React, { createContext, useCallback, useMemo } from 'react';

import * as A from 'antd';
import propTypes from 'prop-types';

const ToastContext = createContext();

export default ToastContext;

export function ToastProvider({ children }) {
  const [messageApi, contextHolder] = A.message.useMessage();

  const addToastError = useCallback(
    item => {
      messageApi.open({
        type: 'error',
        content: item?.response?.data?.message,
      });
    },
    [messageApi]
  );

  const valuesToastProvider = useMemo(
    () => ({
      addToastError,
    }),
    [addToastError]
  );

  return (
    <ToastContext.Provider value={valuesToastProvider}>
      {contextHolder}
      {children}
    </ToastContext.Provider>
  );
}

ToastProvider.propTypes = {
  children: propTypes.node.isRequired,
};
