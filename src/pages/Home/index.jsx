import * as Components from 'components';

import * as S from './styles';

export function Home() {
  return (
    <Components.Layout titleSEO="Home">
      <S.Wrapper>
        <Components.DashCard title="Balanço">Saldo geral</Components.DashCard>
        <Components.DashCard title="Minhas Contas">
          Saldo geral
        </Components.DashCard>
      </S.Wrapper>
    </Components.Layout>
  );
}
