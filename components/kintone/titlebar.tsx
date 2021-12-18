import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import Image from 'next/image';
import { APP_NAME } from '../../static/app';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <Image src='/images/puzzle.png' height={48} width={48} alt='App Icon' />
    <div>{APP_NAME}</div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 48px;
  background-color: #d4d7d7;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 700;
  font-size: 16px;
  color: #000a;
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
