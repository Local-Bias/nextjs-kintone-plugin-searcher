import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import { APP_NAME } from '../../../static/app';
import HomeIcon from '@mui/icons-material/Home';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <HomeIcon />
    <div>アプリ: {APP_NAME}</div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 40px;
  border-bottom: 1px solid #e3e7e8;
  display: flex;
  align-items: center;
  color: #888;
  fill: #888;
  font-size: 13px;
  gap: 12px;
  svg {
    width: 18px;
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
