import { useEffect, useState } from 'react';

import * as A from 'antd';
import useToast from 'hooks/UseToast';
import { getExpensesEntries } from 'services/entries.service';

import * as Components from 'components';

export function Expenses() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToastError } = useToast();
  useEffect(() => {
    setLoading(true);
    getExpensesEntries()
      .then(res => {
        setEntries(res);
      })
      .catch(err => {
        addToastError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Despesas" loading={loading}>
      <A.Card>
        <Components.EntriesFlow data={entries} type="expenses" />
      </A.Card>
    </Components.Layout>
  );
}
