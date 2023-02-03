import { useEffect, useState } from 'react';

import useToast from 'hooks/UseToast';
import { getAccounts } from 'services/accounts.service';

import * as Components from 'components';

export function BankAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToastError } = useToast();
  useEffect(() => {
    setLoading(true);
    getAccounts()
      .then(res => setAccounts(res))
      .catch(err => {
        addToastError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Contas Bancárias" loading={loading}>
      <Components.BankCard listAccounts={accounts} />
    </Components.Layout>
  );
}
