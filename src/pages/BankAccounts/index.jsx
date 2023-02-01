import banks from 'mock/banks.json';

import * as Components from 'components';

export function BankAccounts() {
  return (
    <Components.Layout titleSEO="Contas Bancárias">
      <Components.BankCard listAccounts={banks} />
    </Components.Layout>
  );
}
