/* eslint-disable react/prop-types */
import * as S from './styles';

export function DashCard({ title, children }) {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Card>
  );
}
