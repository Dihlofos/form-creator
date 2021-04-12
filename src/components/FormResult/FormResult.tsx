import React, { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { doCustomAction, getFormData } from 'store';
import { transformToState } from 'utils';
import { Button } from 'ui';
import FormField from '../FormField/FormField';

import './FormResult.scss';
import { FormLocalState } from './types';

const FormResult: FC = () => {
  const form = useSelector(getFormData);
  const dispatch = useDispatch();
  const { title, items, buttons } = form;
  const [formState, setFormState] = useState<FormLocalState>(
    transformToState(items)
  );

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
        setFormState({ ...formState, [name]: checked });
        return;
      }

      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );

  const renderFields = useMemo(
    () => (
      <form className="form-result__form">
        {items.map((field) => (
          <div className="form-result__field" key={field.id}>
            <FormField
              field={field}
              onChange={handleChange}
              value={formState[field.name]}
            />
          </div>
        ))}
      </form>
    ),
    [items, handleChange, formState]
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
