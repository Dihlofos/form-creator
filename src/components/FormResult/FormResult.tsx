import React, { FC, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  doCustomAction,
  getFormData,
  getFormLocalState,
  setFormLocalState,
} from 'store';
import { Button } from 'ui';
import FormField from '../FormField/FormField';

import './FormResult.scss';

const FormResult: FC = () => {
  const form = useSelector(getFormData);
  const formState = useSelector(getFormLocalState);
  const dispatch = useDispatch();
  const { title, items, buttons, action: formAction, method } = form;

  const handleButtonClick = useCallback(
    (action: string | undefined) => () => {
      if (action) {
        dispatch(doCustomAction(action));
      }
    },
    [dispatch]
  );

  const handleChange = useCallback(
    (e) => {
      const { value, name, checked } = e.target;

      if (!value) {
        dispatch(setFormLocalState({ ...formState, [name]: checked }));
        return;
      }

      dispatch(setFormLocalState({ ...formState, [name]: value }));
    },
    [dispatch, formState]
  );

  const renderFields = useMemo(
    () => (
      <form
        className="form-result__form"
        action={formAction && formAction}
        method={method && method}
      >
        {items.map((field) => (
          <div className="form-result__field" key={field.id}>
            <FormField
              field={field}
              onChange={handleChange}
              value={formState[field.name]}
              checked={formState[field.name]}
            />
          </div>
        ))}
      </form>
    ),
    [items, handleChange, formAction, method, formState]
  );

  const renderButtons = useMemo(
    () => (
      <div className="form-result__buttons">
        {buttons &&
          buttons.map((button) => (
            <div className="form-result__field" key={button.id}>
              <Button onClick={handleButtonClick(button.action)}>
                {button.label}
              </Button>
            </div>
          ))}
      </div>
    ),
    [handleButtonClick, buttons]
  );

  return (
    <div className="form-result">
      <h2 className="form-result__title">{title}</h2>
      {renderFields}
      {buttons && renderButtons}
    </div>
  );
};

export default FormResult;
