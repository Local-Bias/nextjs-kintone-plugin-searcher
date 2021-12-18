import React, { VFCX } from 'react';

import Breadcrumb from './breadcrumb';
import Info from './info';

const Component: VFCX = ({ className }) => (
  <div {...{ className }}>
    <Breadcrumb />
    <Info />
  </div>
);

export default Component;
