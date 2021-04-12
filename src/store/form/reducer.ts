import { FormState } from 'store/types';
import { FORM_SET_DATA, FORM_SET_TAB } from './actionTypes';

export const initialState: FormState = {
  formData: {
    title: '',
    items: [],
    buttons: [],
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
    default:
      return state;
  }
};

export default reducer;
