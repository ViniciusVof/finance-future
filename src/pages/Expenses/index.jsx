import { useEffect, useState } from 'react';

import * as A from 'antd';
import { getExpensesEntries } from 'services/entries.service';

import * as Components from 'components';

export function Expenses() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getExpensesEntries().then(res => {
      setEntries(res);
    });
  }, []);
  return (
    <Components.Layout titleSEO="Despesas">
      <A.Card>
        <Components.EntriesFlow data={entries} type="expenses" />
      </A.Card>
    </Components.Layout>
  );
}
