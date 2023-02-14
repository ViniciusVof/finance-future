import { useEffect, useState } from 'react';

import * as I from '@ant-design/icons';
import * as A from 'antd';
import dayjs from 'dayjs';
import useToast from 'hooks/UseToast';
import { getAccounts } from 'services/accounts.service';
import {
  createEntries,
  deleteEntries,
  getExpensesEntries,
  getTypeEntries,
  realizeEntries,
  updateEntries,
} from 'services/entries.service';
import * as yup from 'yup';

import * as Components from 'components';

import { inputMaskBRL, inputUnmaskBRL } from 'utils/balance';

export function Expenses() {
  const deleteModal = A.Modal.confirm;
  const [modalShow, setModalShow] = useState(false);
  const [form] = A.Form.useForm();
  const [entries, setEntries] = useState([]);
  const [typeEntries, setTypeEntries] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoriesId, setCategoriesId] = useState(false);
  const [entriesId, setEntriesId] = useState([]);
  const [typeForm, setTypeForm] = useState('add');
  const [recurrency, setRecurrency] = useState(false);
  const { addToastError, addToastSuccess } = useToast();
  const Categories = typeEntries
    .filter(item => item.title === 'Despesas')
    .find(listEntrie => listEntrie)?.Categories;
  const SubCategories = Categories?.filter(
    category => category.id === categoriesId
  )
    .map(category => category?.subcategories)
    .map(subcategory => subcategory)
    .flat(Infinity);
  function fetchAccounts() {
    getAccounts()
      .then(res => setAccounts(res))
      .catch(err => {
        addToastError(err);
      });
  }

  function fetchTypeEntries() {
    getTypeEntries()
      .then(res => {
        setTypeEntries(res);
      })
      .catch(err => {
        addToastError(err);
      });
  }

  function fetchExpensesEntries() {
    getExpensesEntries()
      .then(res => {
        setEntries(res);
      })
      .catch(err => {
        addToastError(err);
      });
  }
  function fetchAll() {
    setLoading(true);
    Promise.all([
      fetchExpensesEntries(),
      fetchTypeEntries(),
      fetchAccounts(),
    ]).finally(() => setLoading(false));
  }
  const handleCategory = value => {
    setCategoriesId(value);
  };

  const handleRecurrency = value => {
    setRecurrency(value);
  };

  function handleRealize(id, realize, dueDate) {
    realizeEntries({
      id,
      realize,
      dueDate,
    })
      .then(() => {
        addToastSuccess('Lançamento alterado');
      })
      .catch(err => {
        addToastError(err);
      })
      .finally(() => {
        fetchAll();
      });
  }
  useEffect(() => {
    fetchAll();
  }, []);

  const schema = yup.object().shape({
    title: yup.string().required('Campo obrigatório'),
    amount: yup.string().required('Campo obrigatório'),
    accountsId: yup.string().required('Campo obrigatório'),
    categoriesId: yup.string().required('Campo obrigatório'),
    subCategoriesId: yup.string(),
    dueDate: yup.string().required('Campo obrigatório'),
    realize: yup.boolean().required('Campo obrigatório'),
    repeatType: yup.string().required('Campo obrigatório'),
    recurrencyTimes: yup.number().required('Campo obrigatório'),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  const onCreate = values => {
    setLoading(true);
    const recurrencyValues = {
      unique: { recurrency: false },
      recurrencyIlimited: {
        recurrency: true,
        recurrencyTimes: 0,
        typeRecurrency: 'month',
      },
      installments: {
        recurrency: true,
        recurrencyTimes: values.recurrencyTimes,
        typeRecurrency: 'month',
      },
    };
    if (typeForm === 'add') {
      createEntries({
        ...values,
        amount: inputUnmaskBRL(values.amount, false),
        dueDate: dayjs(values.dueDate).format('DD/MM/YYYY'),
        type: 'expense',
        ...recurrencyValues[values.repeatType],
      })
        .then(() => {
          addToastSuccess('Lançamento adicionado');
        })
        .catch(err => {
          addToastError(err);
        })
        .finally(() => {
          fetchAll();
        });
    } else {
      updateEntries({
        ...values,
        id: entriesId,
        amount: inputUnmaskBRL(values.amount, false),
        dueDate: dayjs(values.dueDate).format('DD/MM/YYYY'),
      })
        .then(() => {
          addToastSuccess('Lançamento editado');
        })
        .catch(err => {
          addToastError(err);
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
    setEntriesId(values.id);
    form.setFieldsValue({
      ...values,
      amount: inputMaskBRL(Number(values.amount).toFixed(2), false),
      dueDate: dayjs(values.dueDate, 'DD/MM/YYYY'),
    });
    handleShowModal('edit');
  }
  function handleDelete(id, title, recurrencyId, recurrencyIndex) {
    deleteModal({
      closable: true,
      title: `Atenção`,
      icon: <I.ExclamationCircleFilled />,
      content: (
        <p>
          Você tem certeza que deseja excluir o lançamento{' '}
          <strong>&ldquo;{title}&rdquo;</strong>?
        </p>
      ),
      okText: recurrencyId ? 'Excluir apenas este' : 'Sim, excluir',
      okType: 'danger',
      cancelText: recurrencyId ? 'Excluir este e os próximos' : 'Não',
      onCancel() {
        if (recurrencyId) {
          deleteEntries(id, 'nexts', recurrencyId, recurrencyIndex)
            .then(() => {
              addToastSuccess('Lançamento excluído');
            })
            .catch(err => {
              addToastError(err);
            })
            .finally(() => fetchAll());
        } else {
          A.Modal.destroyAll();
        }
      },
      onOk() {
        deleteEntries(id, 'unique', null, null)
          .then(() => {
            addToastSuccess('Lançamento excluído');
          })
          .catch(err => {
            addToastError(err);
          })
          .finally(() => fetchAll());
      },
    });
  }

  return (
    <Components.Layout titleSEO="Despesas" loading={loading} haveActions>
      <Components.Actions
        addLabelButton="Nova Despesa"
        handleAdd={() => setModalShow(true)}
      />
      <A.Card>
        <Components.EntriesFlow
          data={entries}
          type="expenses"
          handleRealize={(id, value, dueDate) =>
            handleRealize(id, value, dueDate)
          }
          handleEdit={entriesValue => handleEdit(entriesValue)}
          handleDelete={(id, title, recurrencyId, recurrencyIndex) => {
            handleDelete(id, title, recurrencyId, recurrencyIndex);
          }}
        />
      </A.Card>

      <Components.ModalForm
        setLoading={setLoading}
        form={form}
        open={modalShow}
        title={`${typeForm === 'add' ? 'Nova' : 'Editar'} despesa`}
        okText={typeForm === 'add' ? 'Cadastrar' : 'Editar'}
        onCreate={onCreate}
        onCancel={() => setModalShow(false)}
      >
        <A.Form form={form} layout="vertical">
          <A.Form.Item name="title" label="Descrição" rules={[yupSync]}>
            <A.Input placeholder="Digite a descrição da despesa" />
          </A.Form.Item>
          <A.Form.Item name="amount" label="Valor" rules={[yupSync]}>
            <Components.BRLInput
              placeholder="Digite o valor"
              acceptNegative={false}
            />
          </A.Form.Item>
          <A.Form.Item name="categoriesId" label="Categoria" rules={[yupSync]}>
            <A.Select
              onChange={handleCategory}
              showSearch
              placeholder="Selecione a categoria"
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
              options={Categories}
            />
          </A.Form.Item>
          {categoriesId && SubCategories.length > 0 && (
            <A.Form.Item
              name="subCategoriesId"
              label="SubCategoria"
              rules={[yupSync]}
            >
              <A.Select
                showSearch
                placeholder="Selecione a subcategoria"
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
                options={SubCategories}
              />
            </A.Form.Item>
          )}
          <A.Form.Item
            name="accountsId"
            label="Conta bancária"
            rules={[yupSync]}
          >
            <A.Select
              showSearch
              placeholder="Selecione a conta bancária"
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
                label: 'fullBankAccount',
                value: 'id',
              }}
              options={accounts}
            />
          </A.Form.Item>
          <A.Form.Item name="realize" label="Status" rules={[yupSync]}>
            <A.Select
              showSearch
              placeholder="Selecione o status"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? '').toLowerCase())
              }
              options={[
                {
                  label: 'Realizado',
                  value: true,
                },
                { label: 'Não realizado', value: false },
              ]}
            />
          </A.Form.Item>
          <A.Form.Item
            name="repeatType"
            label="Repetir lançamento?"
            rules={[yupSync]}
          >
            <A.Select
              onChange={handleRecurrency}
              showSearch
              placeholder="Repetir lançamento?"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? '').includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? '')
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? '').toLowerCase())
              }
              options={[
                {
                  label: 'Fixa',
                  value: 'recurrencyIlimited',
                },
                { label: 'Parcelada', value: 'installments' },
                { label: 'Única', value: 'unique' },
              ]}
            />
          </A.Form.Item>
          {recurrency === 'installments' && (
            <A.Form.Item
              name="recurrencyTimes"
              label="Quantas parcelas?"
              rules={[yupSync]}
            >
              <A.InputNumber min={2} max={120} />
            </A.Form.Item>
          )}
          <A.Form.Item
            name="dueDate"
            label="Data de vencimento"
            rules={[yupSync]}
          >
            <A.DatePicker format="DD/MM/YYYY" style={{ width: '100%' }} />
          </A.Form.Item>
        </A.Form>
      </Components.ModalForm>
    </Components.Layout>
  );
}
