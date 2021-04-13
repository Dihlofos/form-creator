import { Field } from 'components/FormField/types';
import { FormLocalState } from 'components/FormResult/types';

const transformToState = (fields: Field[]): FormLocalState => {
  const result: FormLocalState = {};

  fields.forEach(({ name, defaultValue, defaultChecked }) => {
    if (defaultValue) {
      result[name] = defaultValue ?? '';
    } else {
      result[name] = defaultChecked ?? '';
    }
  });

  return result;
};

export default transformToState;
