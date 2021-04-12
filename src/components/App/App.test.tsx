import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import App from './App';

const mockStore = configureMockStore();

describe('Common App test', () => {
  it('FormTabs shows', () => {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find('FormTabs').length).toEqual(1);
  });
});
