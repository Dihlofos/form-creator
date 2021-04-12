import { createSelector } from 'reselect';
import { FormState, Store } from '../types';

const formState = (state: Store): FormState => state.form;

export const getFormData = createSelector(formState, (state) => state.formData);
export const getActiveTab = createSelector(
  formState,
  (state) => state.activeTab
);
