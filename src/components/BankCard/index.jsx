/* eslint-disable react/prop-types */
import { formatBalance } from 'utils/balance';

import * as S from './styles';

export function BankCard({ listAccounts, isList }) {
  return isList ? (
    <S.WrapperList>
      {listAccounts.map(account => (
        <S.CardList>
          <S.BalanceList>{formatBalance(account.amountBalance)}</S.BalanceList>
          <S.Account>
            {account.bankAccount} ({account.typeAccount})
          </S.Account>
        </S.CardList>
      ))}
    </S.WrapperList>
  ) : (
    <S.Wrapper>
      {listAccounts.map(account => (
        <S.Card>
          <S.Balance>{formatBalance(account.amountBalance)}</S.Balance>
          <S.Account>
            {account.bankAccount} ({account.typeAccount})
          </S.Account>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
