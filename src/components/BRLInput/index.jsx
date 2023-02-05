/* eslint-disable react/prop-types */
import * as A from 'antd';

import { inputMaskBRL } from 'utils/balance';

export function BRLInput(props) {
  const { onChange, acceptNegative } = props;
  const handleChange = e => {
    const { value: inputValue } = e.target;
    onChange(inputMaskBRL(inputValue, acceptNegative ?? true));
  };

  return (
    <A.Input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      onChange={handleChange}
      maxLength={16}
    />
  );
}
