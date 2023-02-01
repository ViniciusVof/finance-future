import * as Components from 'components';

import * as S from './styles';

export function MyProfile() {
  return (
    <Components.Layout titleSEO="Meu Perfil">
      <S.Card>
        <S.Avatar size={64} hape="square">
          VO
        </S.Avatar>
        <S.Fullname level={4}>Vinicius Oliveira de Freitas</S.Fullname>
        <S.Email>vinicius.vof@outlook.com</S.Email>
      </S.Card>
    </Components.Layout>
  );
}
