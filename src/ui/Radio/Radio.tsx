import React, { FC } from 'react';
import { Radio as RadioComponent, RadioProps } from 'antd';

import 'antd/lib/radio/style/css';
import { RadioField } from './types';

type OwnRadioProps = RadioProps & { radioValues: RadioField[] };

const Radio: FC<OwnRadioProps> = (props) => {
  const { radioValues, ...rest } = props;
  return (
    <RadioComponent.Group {...rest}>
      {radioValues.map(({ label, value }) => (
        <RadioComponent value={value} key={value}>
          {label}
        </RadioComponent>
      ))}
    </RadioComponent.Group>
  );
};

export default Radio;
