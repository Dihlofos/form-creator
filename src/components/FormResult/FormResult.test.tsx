import React from 'react';
import { create } from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import InitialState from '../../jest/InitialState';
import FormResult from './FormResult';

const mockStore = configureMockStore();

describe('FormResult test', () => {
  it('snapshot test', () => {
    const store = mockStore(InitialState);

    const tree = create(
      <Provider store={store}>
        <FormResult />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
