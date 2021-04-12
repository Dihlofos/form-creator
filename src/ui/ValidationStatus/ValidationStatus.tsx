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
      {t(status)}
    </div>
  );
};

export default withTranslation()(ValidationStatus);
