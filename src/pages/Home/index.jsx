import { useEffect, useState } from 'react';

import * as A from 'antd';
import useToast from 'hooks/UseToast';
import { getDashboard } from 'services/dashboard.service';

import * as Components from 'components';

import { formatBalance } from 'utils/balance';

export function Home() {
  const [dashboard, setDashboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToastError } = useToast();
  useEffect(() => {
    setLoading(true);
    getDashboard()
      .then(res => {
        setDashboard(res);
      })
      .catch(err => {
        addToastError(err);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Components.Layout titleSEO="Home" loading={loading}>
      <A.Row gutter={20}>
        <A.Col span={12}>
          <Components.DashCard title="Balanço">
            Olá {dashboard?.user?.fullname} <br />
            Seu saldo atual é de: <br />
            <A.Typography.Title level={5}>
              {formatBalance(dashboard?.amountBalance)}
            </A.Typography.Title>
          </Components.DashCard>
        </A.Col>
        {dashboard?.accounts && (
          <A.Col span={12}>
            <Components.DashCard title="Minhas Contas">
              <Components.BankCard listAccounts={dashboard?.accounts} isList />
            </Components.DashCard>
          </A.Col>
        )}
      </A.Row>
    </Components.Layout>
  );
}
