import styled from 'styled-components';

export const BreadcrumbsWrapper = styled.section`
  padding-bottom: ${({ haveActions }) => (haveActions ? '0px' : '30px')};
`;
