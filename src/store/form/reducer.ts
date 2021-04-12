import { FormState } from '../types';
import {
  FORM_EDIT,
  FORM_SET_DATA,
  FORM_SET_TAB,
  FORM_VALIDATE_ERROR,
  FORM_VALIDATE_GO,
  FORM_VALIDATE_SUCCESS,
} from './actionTypes';

export const initialState: FormState = {
  formData: {
    title: '',
    items: [],
    buttons: [],
  },
  validate: {
    errors: [],
    status: 'idle',
  },
  activeTab: 'config',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FORM_SET_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    case FORM_SET_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    // this action will fires from result-form button
    case FORM_EDIT:
      return {
        ...state,
        activeTab: 'config',
      };
    case FORM_VALIDATE_GO:
      return {
        ...state,
        validate: {
          errors: [],
          status: 'pending',
        },
      };
    case FORM_VALIDATE_SUCCESS:
      return {
        ...state,
        validate: {
          errors: [],
          status: 'success',
        },
      };
    case FORM_VALIDATE_ERROR:
      return {
        ...state,
        validate: {
          errors: action.payload,
          status: 'error',
        },
      };
    default:
      return state;
  }
};

export default reducer;
