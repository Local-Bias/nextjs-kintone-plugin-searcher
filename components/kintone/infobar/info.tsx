import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import { useRecoilValue } from 'recoil';
import { appInfoShownState } from './states';
import { INFO } from '../../../static/app';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{ isShown: boolean }>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      {INFO.map((p, i) => (
        <div key={i}>{p}</div>
      ))}
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  padding: 16px 24px;
  background-color: #eee;
  color: #666;
  border-bottom: 1px solid #e3e7e8;
  box-shadow: 0 2px 5px -3px #0002 inset, 0 4px 8px -6px #0001 inset, 0 -2px 3px -3px #0002 inset;
`;

const Container: VFC<ContainerProps> = () => {
  const isShown = useRecoilValue(appInfoShownState);

  return isShown ? <StyledComponent {...{ isShown }} /> : null;
};

export default Container;
