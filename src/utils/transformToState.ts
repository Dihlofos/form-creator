import { Field } from 'components/FormField/types';
import { FormLocalState } from 'components/FormResult/types';

const transformToState = (fields: Field[]): FormLocalState => {
  const result: FormLocalState = {};

  fields.forEach(({ name, defaultValue }) => {
    result[name] = defaultValue ?? '';
  });

  return result;
};

export default transformToState;
