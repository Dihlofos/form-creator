import { createSelector } from 'reselect';
import { FormState, Store } from '../types';

const formState = (state: Store): FormState => state.form;

export const getFormData = createSelector(formState, (state) => state.formData);
export const getFormLocalState = createSelector(
  formState,
  (state) => state.formLocalState
);
export const getActiveTab = createSelector(
  formState,
  (state) => state.activeTab
);

export const getValidateStatus = createSelector(
  formState,
  (state) => state.validate.status
);

export const getValidateErrors = createSelector(
  formState,
  (state) => state.validate.errors
);
