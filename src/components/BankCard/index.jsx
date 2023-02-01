/* eslint-disable react/prop-types */
import * as S from './styles';

export function BankCard({ listAccounts }) {
  return (
    <S.Wrapper>
      {listAccounts.map(account => (
        <S.Card>
          <S.Balance>
            {account.amountBalance.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </S.Balance>
          <S.Account>
            {account.bankAccount} ({account.typeAccount})
          </S.Account>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
