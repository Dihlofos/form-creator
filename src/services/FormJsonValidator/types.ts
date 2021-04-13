export type FormStructureSchema = {
  title: string;
  action: string;
  method: string;
  items: {
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
    title: string;
    id: string;
    label: string;
    name: string;
    placeholder: string;
    value: string;
    defaultValue: string;
    defaultChecked: boolean;
    radioValues: { label: string; value: string }[];
    min: number;
    max: number;
  }[];
  buttons: {
    id: string;
    label: string;
    name: string;
    action: string;
  }[];
};
