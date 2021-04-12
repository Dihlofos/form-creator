import Ajv, { JSONSchemaType, ValidateFunction } from 'ajv';
import { FormStructure } from 'store/types';
import { FormStructureSchema } from './types';

const schema = require('./schema.json');

class FormJsonValidator {
  private ajv: Ajv;

  private schema: JSONSchemaType<FormStructureSchema>;

  private _validate: ValidateFunction;

  private _errors: any;

  constructor() {
    this.ajv = new Ajv();
    this.schema = schema;
    this._validate = this.ajv.compile(this.schema);
    this._errors = this._validate.errors;
  }

  validate(data: FormStructure) {
    this._validate(data);
    const res = this._validate(data);
    this.errors = this._validate.errors;
    return res;
  }

  get errors() {
    return this._errors;
  }

  set errors(error) {
    this._errors = error;
  }
}

export default FormJsonValidator;
