import { useEffect, useState } from 'react';

import * as A from 'antd';
import { getIncomesEntries } from 'services/entries.service';

import * as Components from 'components';

export function Incomes() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getIncomesEntries()
      .then(res => {
        setEntries(res);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Receitas" loading={loading}>
      <A.Card>
        <Components.EntriesFlow data={entries} type="incomes" />
      </A.Card>
    </Components.Layout>
  );
}
