import React, { ChangeEventHandler, VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import { VIEWS } from '../../../static/app';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { useRecoilState } from 'recoil';
import { kintoneViewIndexState } from '../../../states/view-index';
import PetsIcon from '@mui/icons-material/Pets';
import ParkIcon from '@mui/icons-material/Park';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import TimelineIcon from '@mui/icons-material/Timeline';

import ViewToggle from './view-toggle';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps &
  DeepReadonly<{ viewIndex: number; onViewChange: ChangeEventHandler<HTMLSelectElement> }>;

const Component: VFCX<Props> = ({ className, viewIndex, onViewChange }) => (
  <div {...{ className }}>
    <ViewToggle />
    <div>
      <RocketLaunchIcon />
      <ParkIcon />
      <PetsIcon />
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 16px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;
    &:nth-of-type(2) {
      svg {
        fill: #aaa;
        transition: fill 250ms ease;
        &:hover {
          fill: #3498db;
          filter: drop-shadow(0 2px 4px #3498db44);
        }
        width: 32px;
        height: 32px;
      }
    }
  }

  select {
    border: 0;
    height: 40px;
    color: #3498db;
    width: 100%;
    padding: 0 8px;
    font-size: 90%;
  }

  .view-select {
    border: 5px solid #3498db;
    border-right: 90px solid #3498db;

    svg {
      fill: #3498db;
    }

    border-radius: 3px;
    padding: 0 0 0 4px;
    width: 350px;
    display: flex;
    align-items: center;
    div {
      width: 100%;
      border: 0 !important;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  const [viewIndex, setViewIndex] = useRecoilState(kintoneViewIndexState);

  const onViewChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setViewIndex(Number(e.target.value));
  };

  return <StyledComponent {...{ viewIndex, onViewChange }} />;
};

export default Container;
