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
  `;

export function Main() {
  dayjs.locale('pt-br');
  dayjs.extend(customParseFormat);
  return (
    <HelmetProvider>
      <GlobalStyle />
      <Router />
    </HelmetProvider>
  );
}
