import React from 'react';
import {
  InputNumber as InputNumberComponent,
  InputNumberProps,
  Form,
} from 'antd';
import 'antd/lib/input-number/style/css';
import 'antd/lib/input/style/css';

import classNames from 'classnames';
import { OwnProps } from './types';

const InputNumber: React.FC<OwnProps & InputNumberProps> = ({
  className,
  label,
  id,
  defaultValue,
  ...restProps
}) => (
  <div className={classNames(className, 'wrapper-input-component')}>
    <Form.Item label={label} className="label-input-component" htmlFor={id} />
    <InputNumberComponent defaultValue={defaultValue} id={id} {...restProps} />
  </div>
);

export default InputNumber;
