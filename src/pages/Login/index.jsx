/* eslint-disable jsx-a11y/label-has-associated-control */
import * as A from 'antd';
import { useNavigate } from 'react-router-dom';
import { Authenticate } from 'services/users.service';

import * as S from './styles';

export function Login() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <A.Card>
        <A.Form
          initialValues={{
            email: '',
            password: '',
          }}
          layout="vertical"
          onFinish={async values => {
            Authenticate(values).then(res => {
              localStorage.setItem('@finances:token', res.Authorization);
              navigate('/');
            });
          }}
        >
          <A.Form.Item label="E-mail" name="email">
            <A.Input
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
            />
          </A.Form.Item>
          <A.Form.Item label="Senha" name="password">
            <A.Input.Password
              name="password"
              type="password"
              placeholder="Digite sua senha"
            />
          </A.Form.Item>

          <A.Button htmlType="submit" type="primary" block>
            Entrar
          </A.Button>
        </A.Form>
      </A.Card>
    </S.Wrapper>
  );
}
