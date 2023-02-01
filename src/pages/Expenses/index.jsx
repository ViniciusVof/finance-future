import * as A from 'antd';
import data from 'mock/entries.json';

import * as Components from 'components';

export function Expenses() {
  return (
    <Components.Layout titleSEO="Despesas">
      <A.Card>
        <Components.EntriesFlow data={data} type="expenses" />
      </A.Card>
    </Components.Layout>
  );
}
