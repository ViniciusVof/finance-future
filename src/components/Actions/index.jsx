import * as I from '@ant-design/icons';
import * as A from 'antd';
import propTypes from 'prop-types';

import * as S from './styles';

export function Actions({ addLabelButton }) {
  return (
    <S.WrapperActions>
      <A.Button type="dashed">
        <I.PlusOutlined /> {addLabelButton}
      </A.Button>
    </S.WrapperActions>
  );
}

Actions.propTypes = {
  addLabelButton: propTypes.string.isRequired,
};
