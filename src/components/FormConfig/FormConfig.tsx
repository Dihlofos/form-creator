import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { withTranslation, TFunction, WithTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setFormData } from 'store';
import { Button, TextArea } from 'ui';

import './FormConfig.scss';
import FormMock from './mock';

import FormJsonValidator from '../../utils/jsonValidation';

interface FormConfigProps extends WithTranslation {
  onConfigApply: () => void;
  t: TFunction;
}

const FormConfig: FC<FormConfigProps> = ({ t, onConfigApply }) => {
  const dispatch = useDispatch();
  const [config, setConfig] = useState<string>(
    JSON.stringify(FormMock, null, 2)
  );

  FormJsonValidator();

  const handleConfigChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const el = e.target as HTMLTextAreaElement;
      setConfig(el.value);
    },
    []
  );

  const handleApply = useCallback(() => {
    onConfigApply();
    dispatch(setFormData(JSON.parse(config)));
  }, [config, onConfigApply, dispatch]);

  return (
    <div className="form-config">
      <TextArea rows={30} value={config} onChange={handleConfigChange} />
      <Button className="form-config__button" onClick={handleApply}>
        {t('apply')}
      </Button>
    </div>
  );
};

export default withTranslation()(FormConfig);
