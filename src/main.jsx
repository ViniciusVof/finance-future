import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import { ToastProvider } from 'contexts/ToastContext';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import localeData from 'dayjs/plugin/localeData';
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
  .ant-input-number{
    width: 100%;
  }
  strong {
    font-weight: bold
  }
`;

export function Main() {
  dayjs.locale('pt-br');
  dayjs.extend(customParseFormat);
  dayjs.extend(localeData);
  return (
    <ConfigProvider locale={ptBR}>
      <HelmetProvider>
        <ToastProvider>
          <GlobalStyle />
          <Router />
        </ToastProvider>
      </HelmetProvider>
    </ConfigProvider>
  );
}
