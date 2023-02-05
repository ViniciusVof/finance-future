import * as A from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  .ant-card-body {
    padding: 0;
    width: 100%;
  }
`;
export const WrapperList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardList = styled.li`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 13px;
  &:last-child {
    border-bottom: none;
  }
`;

export const HeaderActions = styled.div`
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`;
export const Content = styled.div`
  padding: 0px 24px 24px 24px;
`;

export const BalanceList = styled(A.Typography.Paragraph)`
  text-align: center;
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
