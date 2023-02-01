import * as A from 'antd';
import entries from 'mock/entries.json';

import * as Components from 'components';

export function Incomes() {
  return (
    <Components.Layout titleSEO="Receitas">
      <A.Card>
        <Components.EntriesFlow data={entries} type="incomes" />
      </A.Card>
    </Components.Layout>
  );
}
