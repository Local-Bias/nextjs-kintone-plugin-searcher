import React, { VFCX } from 'react';
import styled from '@emotion/styled';

import Input from './search-input';

const Component: VFCX = ({ className }) => (
  <div {...{ className }}>
    <Input />
  </div>
);

const StyledComponent = styled(Component)`
  display: flex;
  justify-content: center;
`;

export default StyledComponent;
