/* eslint-disable react/prop-types */

/* eslint-disable react/function-component-definition */

/* eslint-disable react/no-unstable-nested-components */
import { useEffect, useState } from 'react';

import * as A from 'antd';
import useToast from 'hooks/UseToast';
import {
  createAccount,
  getAccounts,
  getTypeAccounts,
  updateAccount,
} from 'services/accounts.service';
import * as yup from 'yup';

import * as Components from 'components';

import { inputMaskBRL, inputUnmaskBRL } from 'utils/balance';

export function BankAccounts() {
  const [accounts, setAccounts] = useState([]);
  const [accountsId, setAccountsId] = useState([]);
  const [typeAccounts, setTypeAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [form] = A.Form.useForm();
  const { addToastError, addToastSuccess } = useToast();
  const [typeForm, setTypeForm] = useState('add');

  const schema = yup.object().shape({
    bankAccount: yup.string().required('Campo obrigatório'),
    initialBalance: yup.string().required('Campo obrigatório'),
    typeAccountsId: yup.string().required('Campo obrigatório'),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  function fetchAccounts() {
    getAccounts()
      .then(res => setAccounts(res))
      .catch(err => {
        addToastError(err);
      });
  }
  function fetchTypeAccounts() {
    getTypeAccounts()
      .then(res => setTypeAccounts(res))
      .catch(err => {
        addToastError(err);
      });
  }

  function fetchAll() {
    setLoading(true);
    Promise.all([fetchAccounts(), fetchTypeAccounts()]).finally(() =>
      setLoading(false)
    );
  }
  useEffect(() => {
    fetchAll();
  }, []);
  const onCreate = values => {
    setLoading(true);
    if (typeForm === 'add') {
      createAccount({
        ...values,
        initialBalance: inputUnmaskBRL(values.initialBalance),
      })
        .then(() => {
          addToastSuccess('Conta bancária adicionada');
        })
        .finally(() => {
          fetchAll();
        });
    } else {
      updateAccount({
        ...values,
        id: accountsId,
        initialBalance: inputUnmaskBRL(values.initialBalance),
      })
        .then(() => {
          addToastSuccess('Conta bancária editada');
        })
        .finally(() => {
          fetchAll();
        });
    }
    setModalShow(false);
  };
  function handleShowModal(type) {
    setTypeForm(type);
    setModalShow(!modalShow);
  }
  function handleEdit(values) {
    setAccountsId(values.id);
    form.setFieldsValue({
      ...values,
      initialBalance: inputMaskBRL(Number(values.initialBalance).toFixed(2)),
    });
    handleShowModal('edit');
  }
  return (
    <Components.Layout
      titleSEO="Contas Bancárias"
      loading={loading}
      haveActions
    >
      <Components.Actions
        addLabelButton="Nova Conta Bancária"
        handleAdd={() => handleShowModal('add')}
      />
      <Components.BankCard
        listAccounts={accounts}
        handleEdit={accountsValues => handleEdit(accountsValues)}
      />
      <Components.ModalForm
        setLoading={setLoading}
        form={form}
        open={modalShow}
        title={`${typeForm === 'add' ? 'Nova' : 'Editar'} conta bancária`}
        okText={typeForm === 'add' ? 'Cadastrar' : 'Editar'}
        onCreate={onCreate}
        onCancel={() => setModalShow(false)}
      >
        <A.Form form={form} layout="vertical">
          <A.Form.Item
            name="bankAccount"
            label="Nome da conta"
            rules={[yupSync]}
          >
            <A.Input placeholder="Digite o nome da conta" />
          </A.Form.Item>
          <A.Form.Item
            name="initialBalance"
            label="Saldo inicial"
            rules={[yupSync]}
          >
            <Components.BRLInput placeholder="Digite o saldo inicial" />
          </A.Form.Item>
          <A.Form.Item
            name="typeAccountsId"
            label="Tipo da Conta"
            rules={[yupSync]}
          >
            <A.Select
              showSearch
              placeholder="Selecione o tipo de conta"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? '').toLowerCase())
              }
              fieldNames={{
                label: 'title',
                value: 'id',
              }}
              options={typeAccounts}
            />
          </A.Form.Item>
        </A.Form>
      </Components.ModalForm>
    </Components.Layout>
  );
}
