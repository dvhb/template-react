import React, { FC } from 'react';
import { Provider } from '@dvhb/ui';

import {
  Aligner,
  Button,
  ButtonGroup,
  Checkbox,
  Datepicker,
  DatepickerBirthday,
  DatepickerPeriod,
  Field,
  Hint,
  Icon,
  Input,
  InputWithIcon,
  Link,
  List,
  Modal,
  Popover,
  RadioGroup,
  Select,
  Spacer,
  Stepper,
  Text,
} from '../ui';

declare type Props = {
  children: React.ReactNode;
};
export const DvhbUiProvider: FC<Props> = ({ children }) => (
  <Provider
    components={{
      Aligner,
      Button,
      ButtonGroup,
      Checkbox,
      Datepicker,
      DatepickerBirthday,
      DatepickerPeriod,
      Field,
      Hint,
      Icon,
      Input,
      InputWithIcon,
      Link,
      List,
      Modal,
      Popover,
      RadioGroup,
      Select,
      Spacer,
      Stepper,
      Text,
    }}
  >
    {children}
  </Provider>
);
