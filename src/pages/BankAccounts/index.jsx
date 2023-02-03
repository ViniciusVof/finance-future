import { useEffect, useState } from 'react';

import { getAccounts } from 'services/accounts.service';

import * as Components from 'components';

export function BankAccounts() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    getAccounts().then(res => setAccounts(res));
  }, []);
  return (
    <Components.Layout titleSEO="Contas Bancárias">
      <Components.BankCard listAccounts={accounts} />
    </Components.Layout>
  );
}
