import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { menuRoutes } from './menuRoutes';
import * as S from './styles';

export function Sidebar() {
  const navigate = useNavigate();

  function handleNavigate(route) {
    if (route === '/logout') {
      // eslint-disable-next-line no-alert
      alert('Sair');
    } else {
      navigate(route);
    }
  }
  return (
    <S.WrapperMenu>
      <S.ContentHeaderMenu>
        <Typography.Title level={3}>
          {process.env.REACT_APP_NAME_APP}
        </Typography.Title>
      </S.ContentHeaderMenu>
      <S.MenuApp
        onClick={({ key }) => handleNavigate(key)}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={menuRoutes}
      />
    </S.WrapperMenu>
  );
}
