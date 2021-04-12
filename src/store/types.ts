import { Field } from 'components/FormField/types';
import { Button } from 'ui/Button/types';

export type FormStructure = {
  title?: string;
  items: Field[];
  buttons?: Button[];
};

export type FormState = {
  formData: FormStructure;
  validate: {
    errors: ValidationError[];
    status: 'pending' | 'error' | 'success' | 'idle';
  };
  activeTab: 'config' | 'result';
};

export type ValidationError = {
  path?: string;
  message?: string;
};

export type Store = {
  form: FormState;
};
