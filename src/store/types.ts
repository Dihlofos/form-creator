import { Field } from 'components/FormField/types';
import { Button } from 'ui/Button/types';

export type FormStructure = {
  title?: string;
  items: Field[];
  buttons?: Button[];
};

export type FormState = {
  formData: FormStructure;
  activeTab: 'config' | 'result';
};

export type Store = {
  form: FormState;
};
