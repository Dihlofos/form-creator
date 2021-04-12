import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { withTranslation, TFunction, WithTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { doValidate, getValidateErrors, getValidateStatus } from 'store';
import { Button, TextArea, ValidationErrors, ValidationStatus } from 'ui';

import './FormConfig.scss';
import FormMock from './mock';

interface FormConfigProps extends WithTranslation {
  t: TFunction;
}

const FormConfig: FC<FormConfigProps> = ({ t }) => {
  const dispatch = useDispatch();
  const status = useSelector(getValidateStatus);
  const errors = useSelector(getValidateErrors);
  const [config, setConfig] = useState<string>(
    JSON.stringify(FormMock, null, 2)
  );
  const handleConfigChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const el = e.target as HTMLTextAreaElement;
      setConfig(el.value);
    },
    []
  );

  const handleApply = useCallback(() => {
    dispatch(doValidate(config));
  }, [config, dispatch]);

  return (
    <div className="form-config">
      <TextArea rows={30} value={config} onChange={handleConfigChange} />
      <div className="form-config__bottom">
        <Button className="form-config__button" onClick={handleApply}>
          {t('apply')}
        </Button>
        <ValidationStatus status={status} />
      </div>
      {errors.length ? <ValidationErrors errors={errors} /> : null}
    </div>
  );
};

export default withTranslation()(FormConfig);
