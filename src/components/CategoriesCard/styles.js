import * as A from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled(A.Card)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .ant-list-empty-text {
    display: none;
  }
`;

export const Title = styled(A.Typography.Title)`
  display: flex;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;

export const Categories = styled.ul`
  margin-top: 10px;
  li:first-child {
    border-top: none;
  }
  li:last-child {
    border-bottom: none;
  }
`;

export const SubCategories = styled.ul`
  li:first-child {
    border-top: none;
  }
  li:last-child {
    border-bottom: none;
  }
`;

export const Category = styled.li`
  padding: 7px 5px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  color: #444;
`;

export const SubCategory = styled.li`
  margin: 0px 30px;
  padding: 5px;
  border-bottom: 1px solid #eee;
  color: #ccc;
`;
