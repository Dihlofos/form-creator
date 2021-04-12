import InitialState from '../jest/InitialState';
import transformToState from './transformToState';

describe('checking transformToState', () => {
  it('returns valid state', () => {
    const { form } = InitialState;

    const expectedReturn = {
      name: 'Женя Самсонов',
      number: '5',
      textarea: 'Многострочный текст',
      checkbox: '',
      date: '',
      howit: '',
    };

    expect(transformToState(form.formData.items)).toEqual(expectedReturn);
  });
});
