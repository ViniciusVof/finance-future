import { Menu } from 'antd';
import styled from 'styled-components';

export const WrapperMenu = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const ContentHeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  border-inline-end: 1px solid rgba(5, 5, 5, 0.06);
`;
export const MenuApp = styled(Menu)`
  width: 100%;
  height: 100%;
`;
