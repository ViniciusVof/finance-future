import { menuRoutes } from 'config/menuRoutes';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/no-cycle
import { Brand } from '../Brand';
import * as S from './styles';

export function Sidebar() {
  const navigate = useNavigate();

  function handleNavigate(route) {
    if (route === '/logout') {
      localStorage.clear();
      navigate('/login');
    } else {
      navigate(route);
    }
  }
  return (
    <S.WrapperMenu>
      <S.ContentHeaderMenu>
        <Brand />
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
