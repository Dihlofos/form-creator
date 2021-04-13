import React, { FC } from 'react';
import { Button as ButtonComponent, ButtonProps } from 'antd';

const Button: FC<ButtonProps> = ({ onClick, ...rest }) => (
  <ButtonComponent onClick={onClick} {...rest} />
);

export default Button;
