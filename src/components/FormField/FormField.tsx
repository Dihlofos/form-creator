import React, { FC } from 'react';
import { Input, TextArea, Checkbox, Radio } from 'ui';
import { FormFieldProps } from './types';

const FormField: FC<FormFieldProps> = ({ field, onChange }) => {
  const {
    id,
    type,
    title,
    label,
    placeholder,
    name,
    defaultChecked,
    defaultValue,
    radioValues,
  } = field;

  if (type === 'text' || type === 'date' || type === 'number') {
    return (
      <Input
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  }

  if (type === 'radio' && radioValues) {
    return (
      <>
        {title && <h4>{title}</h4>}
        <Radio
          id={id}
          type={type}
          name={name}
          radioValues={radioValues}
          onChange={onChange}
        />
      </>
    );
  }

  if (type === 'checkbox') {
    return (
      <Checkbox
        id={id}
        type={type}
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
      >
        {label}
      </Checkbox>
    );
  }

  if (type === 'textarea') {
    return (
      <TextArea
        id={id}
        placeholder={placeholder}
        label={label}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    );
  }

  return null;
};

export default FormField;
