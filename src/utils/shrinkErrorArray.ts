import { DefinedError } from 'ajv';
import { ValidationError } from 'store/types';

const shrinkErrorArray = (errors: DefinedError[]): ValidationError[] =>
  errors.map((error: DefinedError) => ({
    path: error.instancePath,
    message: error.message,
  }));

export default shrinkErrorArray;
