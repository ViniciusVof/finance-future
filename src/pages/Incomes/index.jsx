import * as A from 'antd';
import data from 'mock/entries.json';

import * as Components from 'components';

export function Incomes() {
  return (
    <Components.Layout titleSEO="Receitas">
      <A.Card>
        <Components.EntriesFlow data={data} type="incomes" />
      </A.Card>
    </Components.Layout>
  );
}
