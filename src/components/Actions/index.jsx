import * as I from '@ant-design/icons';
import * as A from 'antd';
import propTypes from 'prop-types';

import * as S from './styles';

export function Actions({ addLabelButton, handleAdd }) {
  return (
    <S.WrapperActions>
      <A.Button type="dashed" onClick={() => handleAdd()}>
        <I.PlusOutlined /> {addLabelButton}
      </A.Button>
    </S.WrapperActions>
  );
}
Actions.defaultProps = {
  handleAdd: () => {},
};
Actions.propTypes = {
  addLabelButton: propTypes.string.isRequired,
  handleAdd: propTypes.node,
};
