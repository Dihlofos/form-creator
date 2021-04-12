import React from 'react';
import { create } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import InitialState from '../../jest/InitialState';
import FormConfig from './FormConfig';

const mockStore = configureMockStore();

describe('Common App test', () => {
  it('FormTabs shows', () => {
    const store = mockStore(InitialState);

    const tree = create(
      <Provider store={store}>
        <FormConfig />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
