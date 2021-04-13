import React, { FC } from 'react';
import { TFunction, withTranslation, WithTranslation } from 'react-i18next';

import './ValidationStatus.scss';

interface ValidationStatusProps extends WithTranslation {
  t: TFunction;
  status: 'pending' | 'error' | 'success' | 'idle';
}

const ValidationStatus: FC<ValidationStatusProps> = ({ status, t }) => {
  if (status === 'idle') return null;
  return (
    <div className={`validation-status validation-status--${status}`}>
      Validation: <span className="validation-status__info">{t(status)}</span>
    </div>
  );
};

export default withTranslation()(ValidationStatus);
