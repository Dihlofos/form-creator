import { RadioField } from 'ui/Radio/types';

export type InputTypes = {
  type:
    | 'text'
    | 'number'
    | 'textarea'
    | 'checkbox'
    | 'date'
    | 'radio'
    | 'submit'
    | 'button'
    | 'reset';
};

export type Field = {
  title?: string;
  id: string;
  label?: string;
  name: string;
  placeholder?: string;
  value?: string;
  checked?: boolean;
  defaultValue?: string;
  defaultChecked?: boolean;
  radioValues?: RadioField[];
  min?: number;
  max?: number;
} & InputTypes;

export type FormFieldProps = {
  field: Field;
  value: string | boolean;
  checked?: string | boolean;
  onChange: (e: any) => void;
};
