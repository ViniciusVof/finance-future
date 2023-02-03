import propTypes from 'prop-types';

import { Breadcrumbs } from 'components/Breadcrumbs';
import { Loading } from 'components/Loading';
import { SEO } from 'components/SEO';
import { Sidebar } from 'components/Sidebar';

import * as S from './styles';

export function Layout({ children, titleSEO, loading }) {
  return (
    <S.Wrapper>
      <SEO title={titleSEO} />
      <Sidebar />
      <S.Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Breadcrumbs />
            {children}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  );
}
Layout.defaultProps = {
  titleSEO: 'Vibbraneo Todo',
  children: null,
  loading: false,
};

Layout.propTypes = {
  titleSEO: propTypes.string,
  children: propTypes.node,
  loading: propTypes.bool,
};
