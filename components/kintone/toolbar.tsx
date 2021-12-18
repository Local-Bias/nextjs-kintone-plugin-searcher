import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

import SearchInput from '../smart-view/search-input';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      <LunchDiningIcon />
      <FilterVintageIcon />
      <FlatwareIcon />
      <FastfoodIcon />
    </div>
    <div>
      <SearchInput />
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 48px;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: #4b4b4b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 0 32px 0 12px;

  > div {
    &:nth-of-type(1) {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    &:nth-of-type(2) {
      background-color: #fff;
      width: 270px;
    }
  }

  svg {
    fill: #888;
    width: 30px;
    height: 30px;
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
