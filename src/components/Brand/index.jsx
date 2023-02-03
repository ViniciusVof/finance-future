import logo from './logo.png';
import * as S from './styles';

export function Brand() {
  return (
    <S.Wrapper>
      <S.Brand src={logo} />
    </S.Wrapper>
  );
}
