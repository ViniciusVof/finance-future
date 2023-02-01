import * as A from 'antd';
import dashboard from 'mock/dashboard.json';

import * as Components from 'components';

import { formatBalance } from 'utils/balance';

export function Home() {
  return (
    <Components.Layout titleSEO="Home">
      <A.Row gutter={20}>
        <A.Col span={12}>
          <Components.DashCard title="Balanço">
            Olá {dashboard.fullname} <br />
            Seu saldo atual é de: <br />
            <A.Typography.Title level={5}>
              {formatBalance(dashboard.totalAmountBalance)}
            </A.Typography.Title>
          </Components.DashCard>
        </A.Col>
        <A.Col span={12}>
          <Components.DashCard title="Minhas Contas">
            <Components.BankCard listAccounts={dashboard.banks} isList />
          </Components.DashCard>
        </A.Col>
      </A.Row>
    </Components.Layout>
  );
}
