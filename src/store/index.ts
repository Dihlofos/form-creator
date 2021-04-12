import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { form } from './form';

export * from './form';

export const rootReducers = combineReducers({
  form,
});

export const store = createStore(rootReducers, composeWithDevTools());
