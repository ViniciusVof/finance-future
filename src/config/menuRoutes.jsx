import * as I from '@ant-design/icons';

export const menuRoutes = [
  { label: 'Visão geral', key: '/', icon: <I.EyeOutlined /> },
  {
    label: 'Lançamentos',
    key: 'sub1',
    icon: <I.DollarCircleOutlined />,
    children: [
      { label: 'Receitas', key: '/incomes' },
      { label: 'Despesas', key: '/expenses' },
      { label: 'Contas', key: '/bank-accounts' },
    ],
  },
  {
    label: 'Configurações',
    key: 'sub4',
    icon: <I.SettingOutlined />,
    children: [
      { label: 'Categorias', key: '/categories' },
      { label: 'Meu Perfil', key: '/my-profile' },
    ],
  },
  { label: 'Sair', key: '/logout', icon: <I.LogoutOutlined /> },
];

export const breadcrumbsRoutes = {
  '/': 'Visão Geral',
  '/expenses': 'Despesas',
  '/incomes': 'Receitas',
  '/bank-accounts': 'Contas Bancárias',
  '/categories': 'Categorias',
  '/my-profile': 'Meu Perfil',
};
