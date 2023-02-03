/* eslint-disable react/prop-types */
import * as A from 'antd';

export function ModalForm({
  open,
  onCreate,
  onCancel,
  okText,
  title,
  children,
  form,
}) {
  return (
    <A.Modal
      open={open}
      title={title}
      okText={okText}
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then(values => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      {children}
    </A.Modal>
  );
}
