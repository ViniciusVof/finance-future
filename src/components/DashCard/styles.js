import * as A from 'antd';
import styled from 'styled-components';

export const Card = styled(A.Card)`
  display: flex;
  flex-direction: column;
  .ant-card-body {
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled(A.Typography.Paragraph)`
  display: flex;
  flex: 1;
  font-weight: bold;
  padding: 5px 24px;
  background-color: #f0f0f0;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 12px;
  background-color: #fff;
`;
