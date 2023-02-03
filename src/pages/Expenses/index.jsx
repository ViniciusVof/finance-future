import { useEffect, useState } from 'react';

import * as A from 'antd';
import { getExpensesEntries } from 'services/entries.service';

import * as Components from 'components';

export function Expenses() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getExpensesEntries()
      .then(res => {
        setEntries(res);
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
