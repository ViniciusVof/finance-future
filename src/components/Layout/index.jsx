import propTypes from 'prop-types';

import { Breadcrumbs } from 'components/Breadcrumbs';
import { SEO } from 'components/SEO';
import { Sidebar } from 'components/Sidebar';

import * as S from './styles';

export function Layout({ children, titleSEO }) {
  return (
    <S.Wrapper>
      <SEO title={titleSEO} />
      <Sidebar />
      <S.Content>
        <Breadcrumbs />
        {children}
      </S.Content>
    </S.Wrapper>
  );
}
Layout.defaultProps = {
  titleSEO: 'Vibbraneo Todo',
  children: null,
};

Layout.propTypes = {
  titleSEO: propTypes.string,
  children: propTypes.node,
};
