import * as A from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const Card = styled(A.Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;
`;

export const Balance = styled(A.Typography.Title)`
  text-align: center;
`;
export const Account = styled(A.Typography.Paragraph)`
  font-size: 12px;
  color: #999;
`;
