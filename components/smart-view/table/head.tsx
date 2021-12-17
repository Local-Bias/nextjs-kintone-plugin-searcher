import React, { VFC } from 'react';
import { HEADER_LABELS } from '../../../static/app';

const Component: VFC = () => (
  <thead>
    <tr>
      {HEADER_LABELS.map((label, i) => (
        <th key={i}>{label}</th>
      ))}
    </tr>
  </thead>
);

export default Component;
