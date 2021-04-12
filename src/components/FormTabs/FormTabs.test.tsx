import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import InitialState from '../../jest/InitialState';
import FormTabs from './FormTabs';

const mockStore = configureMockStore();

describe('FormTabs testing', () => {
  it('2 Tabs was rendered', () => {
    const store = mockStore(InitialState);

    const wrapper = mount(
      <Provider store={store}>
        <FormTabs />
      </Provider>
    );

    expect(wrapper.find('Tabs').length).toEqual(2);
  });
});
