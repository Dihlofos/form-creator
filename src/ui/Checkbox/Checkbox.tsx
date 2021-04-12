import React, { FC } from 'react';
import { Checkbox as CheckboxComponent, CheckboxProps } from 'antd';

import 'antd/lib/checkbox/style/css';

const Checkbox: FC<CheckboxProps> = ({ defaultChecked, ...rest }) => (
  <CheckboxComponent defaultChecked={defaultChecked} {...rest} />
);

export default Checkbox;
