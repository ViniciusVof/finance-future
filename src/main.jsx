import { ToastProvider } from 'contexts/ToastContext';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const customParseFormat = require('dayjs/plugin/customParseFormat');

const GlobalStyle = createGlobalStyle`
  ${reset}
  .ant-typography {
    margin-bottom: 0 !important;
  }
  .ant-card{
    border-radius: 3px;
  }
  `;

export function Main() {
  dayjs.locale('pt-br');
  dayjs.extend(customParseFormat);
  return (
    <HelmetProvider>
      <ToastProvider>
        <GlobalStyle />
        <Router />
      </ToastProvider>
    </HelmetProvider>
  );
}
