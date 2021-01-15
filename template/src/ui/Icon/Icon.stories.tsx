import React from 'react';

import { Icon } from '.';
import * as Svg from './components';

export default {
  title: 'UI/Icon',
};

const icons = Object.keys(Svg);
export const Default = () => (
  <div style={{ padding: '0px 20px' }}>
    <div className="row">
      {icons.map((icon: any) => (
        <div key={icon} className="col-3">
          <div className="spacer">
            <Icon name={icon} />
            <div>{icon}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
