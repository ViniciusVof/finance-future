import propTypes from 'prop-types';

import { Breadcrumbs } from 'components/Breadcrumbs';
import { Loading } from 'components/Loading';
import { SEO } from 'components/SEO';
import { Sidebar } from 'components/Sidebar';

import * as S from './styles';

export function Layout({ children, titleSEO, loading, haveActions }) {
  return (
    <S.Wrapper>
      <SEO title={titleSEO} />
      <Sidebar />
      <S.Content>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Breadcrumbs haveActions={haveActions} />
            {children}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  );
}
Layout.defaultProps = {
  titleSEO: process.env.REACT_APP_NAME_APP,
  children: null,
  loading: false,
  haveActions: false,
};

Layout.propTypes = {
  titleSEO: propTypes.string,
  children: propTypes.node,
  loading: propTypes.bool,
  haveActions: propTypes.bool,
};
