import { FormStructure } from 'store/types';

const FormMock: FormStructure = {
  title: 'Тестовая форма',
  action: '',
  method: 'POST',
  items: [
    {
      id: 'name',
      type: 'text',
      label: 'Имя',
      name: 'name',
      placeholder: 'Введите имя',
      defaultValue: 'Женя Самсонов',
    },
    {
      id: 'number',
      type: 'number',
      label: 'Числа',
      name: 'number',
      placeholder: 'Введите число',
      max: 10,
      min: 0,
      defaultValue: '5',
    },
    {
      id: 'textarea',
      type: 'textarea',
      label: 'Опишите нечто',
      name: 'textarea',
      placeholder: 'Введите многострочный текст',
      defaultValue: 'Многострочный текст',
    },
    {
      id: 'checkbox',
      type: 'checkbox',
      label: 'Чекбокс',
      name: 'checkbox',
      defaultChecked: true,
      placeholder: 'Согласны ли вы?',
    },
    {
      id: 'date',
      type: 'date',
      label: 'Дата',
      name: 'date',
      placeholder: 'Введите дату',
    },
    {
      title: 'Как вам в IT?',
      type: 'radio',
      name: 'howit',
      id: 'howit',
      radioValues: [
        {
          label: 'Отлично, нравится',
          value: 'great',
        },
        {
          label: 'Приемлемо',
          value: 'acceptable',
        },
        {
          label: 'Выгорел',
          value: 'burned',
        },
      ],
    },
  ],
  buttons: [
    {
      id: 'submit',
      label: 'Отправить',
      name: 'submit',
      action: 'FORM/SUBMIT',
    },
    {
      id: 'clear',
      label: 'Сбросить',
      name: 'clear',
      action: 'FORM/CLEAR',
    },
    {
      id: 'edit',
      label: 'Редактировать',
      name: 'edit',
      action: 'FORM/EDIT',
    },
  ],
};

export default FormMock;
