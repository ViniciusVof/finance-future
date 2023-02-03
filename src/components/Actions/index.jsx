import * as I from '@ant-design/icons';
import * as A from 'antd';

import * as S from './styles';

// eslint-disable-next-line react/prop-types
export function Actions({ addLabelButton }) {
  return (
    <S.WrapperActions>
      <A.Button type="dashed">
        <I.PlusOutlined /> {addLabelButton}
      </A.Button>
    </S.WrapperActions>
  );
}
