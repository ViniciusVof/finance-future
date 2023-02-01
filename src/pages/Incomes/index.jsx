import * as A from 'antd';
import data from 'mock/entries.json';
import { getBalance } from 'services/balance.service';

import * as Components from 'components';

export function Incomes() {
  return (
    <Components.Layout titleSEO="Receitas">
      <A.Card>
        <Components.EntriesFlow data={data} type="incomes" />
        saldo
        {getBalance(data)}
      </A.Card>
    </Components.Layout>
  );
}
