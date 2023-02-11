import { useEffect, useState } from 'react';

import * as A from 'antd';
import useToast from 'hooks/UseToast';
import {
  createCategory,
  createSubCategory,
  getCategories,
  updateCategory,
} from 'services/categories.service';
import { getTypeEntries } from 'services/entries.service';
import * as yup from 'yup';

import * as Components from 'components';

export function Categories() {
  const [modalShow, setModalShow] = useState(false);
  const [form] = A.Form.useForm();
  const [entriesList, setEntriesList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { addToastError, addToastSuccess } = useToast();
  const [type, setType] = useState('category');
  const [itemId, setItemId] = useState('');
  const [typeForm, setTypeForm] = useState('add');

  const schema = yup.object().shape({
    typeCategory: yup.string().required('Campo obrigatório'),
    title: yup.string().required('Campo obrigatório'),
    type: yup.string().required('Campo obrigatório'),
    categoriesId: yup.string().required('Campo obrigatório'),
  });

  const yupSync = {
    async validator({ field }, value) {
      await schema.validateSyncAt(field, { [field]: value });
    },
  };

  function fetchTypeEntries() {
    getTypeEntries()
      .then(res => {
        setEntriesList(res);
      })
      .catch(err => {
        addToastError(err);
      });
  }
  function fetchCategories() {
    getCategories()
      .then(res => {
        setCategories(res);
      })
      .catch(err => {
        addToastError(err);
      });
  }
  function fetchAll() {
    setLoading(true);
    Promise.all([fetchCategories(), fetchTypeEntries()]).finally(() => {
      setLoading(false);
    });
  }
  const onCreate = values => {
    setLoading(true);
    if (typeForm === 'add') {
      if (type === 'category') {
        createCategory({
          title: values.title,
          type: values.type,
        })
          .then(() => {
            addToastSuccess('Categoria adicionada');
          })
          .finally(() => {
            fetchAll();
          });
      } else {
        createSubCategory(values)
          .then(() => {
            addToastSuccess('Categoria adicionada');
          })
          .finally(() => {
            fetchAll();
          });
      }
    } else if (typeForm === 'edit') {
      if (type === 'category') {
        updateCategory({
          id: itemId,
          title: values.title,
          type: values.type,
        })
          .then(() => {
            addToastSuccess('Categoria editada');
          })
          .catch(err => {
            addToastError(err);
          })
          .finally(() => {
            fetchAll();
          });
      }
    }

    setModalShow(false);
  };
  const handleType = ({ target: { value } }) => {
    setType(value);
  };
  function handleShowModal(typeModal) {
    setTypeForm(typeModal);
    setModalShow(!modalShow);
  }
  function handleEdit(typeItem, values) {
    setItemId(values.id);
    setType(typeItem);
    if (typeItem === 'subcategory') {
      form.setFieldsValue({
        typeCategory: typeItem,
        title: values.title,
        categoriesId: values.categoriesId,
      });
    } else {
      form.setFieldsValue({
        typeCategory: typeItem,
        title: values.title,
        type: values.type.title === 'Receitas' ? 'income' : 'expense',
      });
    }
    handleShowModal('edit');
  }
  function handleRemove(typeItem, values) {
    setItemId(values.id);
    form.setFieldsValue({
      values,
    });
    handleShowModal('delete');
  }
  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <Components.Layout titleSEO="Categorias" loading={loading} haveActions>
      <Components.Actions
        addLabelButton="Nova Categoria"
        handleAdd={() => handleShowModal('add')}
      />

      <Components.CategoriesCard
        listEntries={entriesList}
        handleEdit={(typeItem, data) => handleEdit(typeItem, data)}
        handleRemove={(typeItem, data) => handleRemove(typeItem, data)}
      />

      <Components.ModalForm
        setLoading={setLoading}
        form={form}
        open={modalShow}
        title={`${
          (typeForm === 'add' && 'Nova') ||
          (typeForm === 'edit' && 'Editar') ||
          (typeForm === 'delete' && 'Excluir')
        } categoria`}
        okText={
          (typeForm === 'add' && 'Cadastrar') ||
          (typeForm === 'edit' && 'Editar') ||
          (typeForm === 'delete' && 'Excluir')
        }
        onCreate={onCreate}
        onCancel={() => setModalShow(false)}
      >
        <A.Form
          form={form}
          initialValues={{ typeCategory: type }}
          layout="vertical"
        >
          <A.Form.Item name="typeCategory" label="Tipo" rules={[yupSync]}>
            <A.Radio.Group
              options={[
                { label: 'Categoria', value: 'category' },
                { label: 'SubCategoria', value: 'subcategory' },
              ]}
              disabled={typeForm !== 'add'}
              optionType="button"
              buttonStyle="solid"
              value={type}
              onChange={handleType}
            />
          </A.Form.Item>
          <A.Form.Item name="title" label="Nome da categoria" rules={[yupSync]}>
            <A.Input placeholder="Digite o nome da categoria" />
          </A.Form.Item>
          {type === 'subcategory' ? (
            <A.Form.Item
              name="categoriesId"
              label="Categoria Pai"
              rules={[yupSync]}
            >
              <A.Select
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
                options={categories}
              />
            </A.Form.Item>
          ) : (
            <A.Form.Item
              name="type"
              label="Tipo da Categoria"
              rules={[yupSync]}
            >
              <A.Select
                showSearch
                placeholder="Selecione o tipo da categoria"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={[
                  {
                    label: 'Receitas',
                    value: 'income',
                  },
                  {
                    label: 'Despesas',
                    value: 'expense',
                  },
                ]}
              />
            </A.Form.Item>
          )}
        </A.Form>
      </Components.ModalForm>
    </Components.Layout>
  );
}
