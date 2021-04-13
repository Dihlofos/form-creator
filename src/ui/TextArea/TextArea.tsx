import React, { FC } from 'react';
import { Input, Form } from 'antd';
import { TextAreaProps } from 'antd/lib/input';

import './TextArea.scss';
import { OwnProps } from 'ui/Input/types';

const { TextArea: TextAreaComponent } = Input;

const TextArea: FC<TextAreaProps & OwnProps> = (props) => {
  const { id, label } = props;

  return (
    <>
      <Form.Item label={label} className="label-input-component" htmlFor={id} />
      <TextAreaComponent {...props} className="textarea" />
    </>
  );
};

export default TextArea;
