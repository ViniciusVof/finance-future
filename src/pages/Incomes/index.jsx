import { useEffect, useState } from 'react';

import * as A from 'antd';
import { getIncomesEntries } from 'services/entries.service';

import * as Components from 'components';

export function Incomes() {
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getIncomesEntries().then(res => {
      setEntries(res);
    });
  }, []);
  return (
    <Components.Layout titleSEO="Receitas">
      <A.Card>
        <Components.EntriesFlow data={entries} type="incomes" />
      </A.Card>
    </Components.Layout>
  );
}
