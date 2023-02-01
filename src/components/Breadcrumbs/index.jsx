import { Breadcrumb } from 'antd';
import { breadcrumbsRoutes } from 'config/menuRoutes';
import { Link, useLocation } from 'react-router-dom';

import * as S from './styles';

export function Breadcrumbs() {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbsRoutes[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  // eslint-disable-next-line react/jsx-no-bind
  return (
    <S.BreadcrumbsWrapper>
      <Breadcrumb>{breadcrumbItems}</Breadcrumb>
    </S.BreadcrumbsWrapper>
  );
}
