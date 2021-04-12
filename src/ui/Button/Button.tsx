import React, { FC } from 'react';
import { Button as ButtonComponent, ButtonProps } from 'antd';

import 'antd/lib/button/style/css';

// type OwnButtonProps = { onClick: () => void };
const Button: FC<ButtonProps> = ({ onClick, ...rest }) => (
  <ButtonComponent onClick={onClick} {...rest} />
);

export default Button;
