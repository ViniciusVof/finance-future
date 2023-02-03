import { useState } from 'react';

import * as I from '@ant-design/icons';
import * as A from 'antd';
import useToast from 'hooks/UseToast';
import { useNavigate } from 'react-router-dom';
import { Authenticate } from 'services/users.service';
import * as yup from 'yup';

import * as Components from 'components';

import * as S from './styles';

export function Login() {
  const navigate = useNavigate();
  const [form] = A.Form.useForm();
  const [loading, setLoading] = useState(false);
  const { addToastError } = useToast();

  const schema = yup.object().shape({
    email: yup.string().email('Campo inválido').required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  return (
    <S.Wrapper>
      <A.Card>
        <Components.Brand />
        <A.Form
          form={form}
          layout="vertical"
          onFinish={async values => {
            setLoading(true);
            Authenticate(values)
              .then(res => {
                localStorage.setItem('@finances:token', res.Authorization);
                navigate('/');
              })
              .catch(err => {
                addToastError(err);
              })
              .finally(() => setLoading(false));
          }}
        >
          <A.Form.Item label="E-mail" name="email" rules={[yupSync]}>
            <A.Input
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
              prefix={<I.MailOutlined className="site-form-item-icon" />}
            />
          </A.Form.Item>
          <A.Form.Item label="Senha" name="password" rules={[yupSync]}>
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
