import React from 'react';
import { Input as InputComponent, InputProps, Form } from 'antd';
import './Input.scss';
import classNames from 'classnames';
import { OwnProps } from './types';

const Input: React.FC<OwnProps & InputProps> = ({
  className,
  label,
  id,
  value,
  defaultValue,
  ...restProps
}) => (
  <div className={classNames(className, 'wrapper-input-component')}>
    <Form.Item label={label} className="label-input-component" htmlFor={id} />
    <InputComponent
      className="input-component"
      defaultValue={defaultValue}
      id={id}
      value={value}
      {...restProps}
    />
  </div>
);

export default Input;
