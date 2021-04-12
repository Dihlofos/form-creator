import { FormStructure } from 'store/types';
import { FORM_SET_DATA, FORM_SET_TAB } from './actionTypes';

const setFormData = (payload: FormStructure) => ({
  type: FORM_SET_DATA,
  payload,
});

const setActiveTab = (data: string) => ({
  type: FORM_SET_TAB,
  payload: data,
});

const doCustomAction = (type: string) => ({
  type,
});

export { setFormData, setActiveTab, doCustomAction };
