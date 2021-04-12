import React, { FC } from 'react';
import { ValidationError } from 'store/types';

import './ValidationErrors.scss';

type ValidationErrorsProps = {
  errors: ValidationError[];
};

const ValidationErrors: FC<ValidationErrorsProps> = ({ errors }) => (
  <ul className="validate-error">
    {errors.map((error) => (
      <li
        key={`${error.path}: ${error.message}`}
        className="validate-error__item"
      >{`${error.path}: ${error.message}`}</li>
    ))}
  </ul>
);

export default ValidationErrors;
