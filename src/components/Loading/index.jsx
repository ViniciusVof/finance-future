import * as A from 'antd';

import * as S from './styles';

export function Loading() {
  return (
    <S.Wrapper>
      <A.Space size="middle">
        <A.Spin size="large" />
      </A.Space>
    </S.Wrapper>
  );
}
