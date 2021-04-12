import React from 'react';
import { create } from 'react-test-renderer';
import FormField from './FormField';
import { FormFieldProps } from './types';

describe('ContentBox testing', () => {
  const props: FormFieldProps = {
    field: {
      defaultValue: 'Женя Самсонов',
      id: 'name',
      label: 'Имя',
      name: 'name',
      placeholder: 'Введите имя',
      type: 'text',
    },
    value: 'Женя Самсонов',
    onChange: () => {},
  };

  it('snapshot matches', () => {
    const tree = create(<FormField {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
