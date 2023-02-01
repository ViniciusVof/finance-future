import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'routes';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  `;

export function Main() {
  return (
    <HelmetProvider>
      <GlobalStyle />
      <Router />
    </HelmetProvider>
  );
}
