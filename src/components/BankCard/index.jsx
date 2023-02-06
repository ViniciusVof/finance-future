import * as I from '@ant-design/icons';
import * as A from 'antd';
import propTypes from 'prop-types';

import { formatBalance } from 'utils/balance';

import * as S from './styles';

export function BankCard({ listAccounts, isList, handleEdit, handleRemove }) {
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
          <S.HeaderActions>
            <A.Button
              type="secondary"
              icon={<I.EditOutlined />}
              onClick={() => handleEdit(account)}
            />
            {listAccounts.length > 1 && (
              <A.Button
                type="secondary"
                icon={<I.DeleteOutlined />}
                onClick={() => handleRemove(account)}
              />
            )}
          </S.HeaderActions>
          <S.Content>
            <S.Balance>{formatBalance(account.amountBalance)}</S.Balance>
            <S.Account>
              {account.bankAccount} ({account.typeAccount})
            </S.Account>
          </S.Content>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
BankCard.defaultProps = {
  isList: false,
  handleEdit: () => {},
  handleRemove: () => {},
};
BankCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  listAccounts: propTypes.array.isRequired,
  isList: propTypes.bool,
  handleEdit: propTypes.func,
  handleRemove: propTypes.func,
};
