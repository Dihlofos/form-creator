import { FormState, FormStructure, ValidationError } from 'store/types';
import { ThunkAction } from 'redux-thunk';
import { shrinkErrorArray } from 'utils';
import { FormValidator } from '../../services/index';
import {
  FORM_SET_DATA,
  FORM_SET_TAB,
  FORM_VALIDATE_ERROR,
  FORM_VALIDATE_GO,
  FORM_VALIDATE_SUCCESS,
} from './actionTypes';

const setFormData = (payload: FormStructure) => ({
  type: FORM_SET_DATA,
  payload,
});

const setActiveTab = (data: string) => ({
  type: FORM_SET_TAB,
  payload: data,
});

const formValidate = () => ({
  type: FORM_VALIDATE_GO,
});

const formValidateSuccess = () => ({
  type: FORM_VALIDATE_SUCCESS,
});

const formValidateError = (errors: ValidationError[]) => ({
  type: FORM_VALIDATE_ERROR,
  payload: errors,
});

const doCustomAction = (type: string) => ({
  type,
});

const doValidate = (
  data: string
): ThunkAction<void, FormState, unknown, any> => (dispatch) => {
  /**
   * try/catch for check if JSON is valid (syntax errors which will crash app)
   */
  try {
    const parsedConfig: FormStructure = JSON.parse(data);
    dispatch(formValidate());

    if (FormValidator.validate(parsedConfig)) {
      dispatch(setFormData(parsedConfig));
      dispatch(formValidateSuccess());
      dispatch(setActiveTab('result'));
    } else {
      dispatch(formValidateError(shrinkErrorArray(FormValidator.errors)));
    }
  } catch (error) {
    dispatch(
      formValidateError([
        {
          path: error.name,
          message: error.message,
        },
      ])
    );
  }
};

export {
  setFormData,
  setActiveTab,
  formValidate,
  formValidateSuccess,
  formValidateError,
  doCustomAction,
  doValidate,
};
