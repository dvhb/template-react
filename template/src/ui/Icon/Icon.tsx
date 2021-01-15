import React from 'react';
import { Icon as UIIcon, IconProps as UIIconProps } from '@dvhb/ui';

import * as Svg from './components';

export type IconNamesType = keyof typeof Svg;

export type IconProps = {
  name: IconNamesType;
} & UIIconProps;

export const Icon = ({ name, ...rest }: IconProps) => {
  return <UIIcon svgs={Svg} name={name} {...rest} />;
};
