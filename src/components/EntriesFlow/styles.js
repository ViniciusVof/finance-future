import * as A from 'antd';
import styled from 'styled-components';

export const HeaderNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

export const WrapperItemList = styled(A.Typography.Paragraph)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  flex: 1;
`;
export const Indicator = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ type }) => (type === 'expenses' ? '#F00' : '#0F0')};
`;
export const WrapperOtherItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const ItemTitle = styled(A.Typography.Paragraph)`
  background-color: #f0f0;
  flex: 1;
  flex-wrap: wrap;
  word-wrap: break-word;
  width: calc(50% - 30px);
`;
export const ItemAccount = styled(A.Typography.Paragraph)`
  text-align: left;
  width: 180px;
  justify-content: flex-start;
  font-size: 12px;
  color: #999;
`;
export const ItemDueDate = styled(A.Typography.Paragraph)`
  text-align: left;
  width: 180px;
  justify-content: flex-start;
  font-size: 12px;
  color: #999;
`;

export const ItemCategory = styled(A.Typography.Paragraph)`
  text-align: left;
  justify-content: flex-start;
`;

export const ItemAmount = styled(A.Typography.Paragraph)`
  text-align: left;
  width: 130px;
  justify-content: flex-start;
`;
