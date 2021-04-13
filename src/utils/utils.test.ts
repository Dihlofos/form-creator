import { DefinedError } from 'ajv';
import InitialState from '../jest/InitialState';
import shrinkErrorArray from './shrinkErrorArray';
import transformToState from './transformToState';

describe('checking transformToState', () => {
  it('returns valid state', () => {
    const { form } = InitialState;

    const expectedReturn = {
      name: 'Женя Самсонов',
      number: '5',
      textarea: 'Многострочный текст',
      checkbox: true,
      date: '',
      howit: '',
    };

    expect(transformToState(form.formData.items)).toEqual(expectedReturn);
  });
});

describe('checking shrinkErrorArray', () => {
  it('returns valid state', () => {
    const errors: DefinedError[] = [
      {
        instancePath: '',
        keyword: 'required',
        message: "must have required property 'items'",
        params: { missingProperty: 'items' },
        schemaPath: '#/required',
      },
    ];

    const expectedReturn = [
      {
        path: '',
        message: "must have required property 'items'",
      },
    ];

    expect(shrinkErrorArray(errors)).toEqual(expectedReturn);
  });
});
