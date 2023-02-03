/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';

import * as I from '@ant-design/icons';
import * as A from 'antd';
import { useNavigate } from 'react-router-dom';
import { Authenticate } from 'services/users.service';

import * as Components from 'components';

import * as S from './styles';

export function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
    <S.Wrapper>
      <A.Card>
        <Components.Brand />
        <A.Form
          initialValues={{
            email: '',
            password: '',
          }}
          layout="vertical"
          onFinish={async values => {
            setLoading(true);
            Authenticate(values)
              .then(res => {
                localStorage.setItem('@finances:token', res.Authorization);
                navigate('/');
              })
              .finally(() => setLoading(false));
          }}
        >
          <A.Form.Item label="E-mail" name="email">
            <A.Input
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
              prefix={<I.MailOutlined className="site-form-item-icon" />}
            />
          </A.Form.Item>
          <A.Form.Item label="Senha" name="password">
            <A.Input.Password
              name="password"
              type="password"
              placeholder="Digite sua senha"
              prefix={<I.LockOutlined className="site-form-item-icon" />}
            />
          </A.Form.Item>

          <A.Button
            htmlType="submit"
            disabled={loading}
            type="primary"
            loading={loading}
            block
          >
            Entrar
          </A.Button>
        </A.Form>
      </A.Card>
    </S.Wrapper>
  );
}
