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

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps &
  DeepReadonly<{ viewIndex: number; onViewChange: ChangeEventHandler<HTMLSelectElement> }>;

const Component: VFCX<Props> = ({ className, viewIndex, onViewChange }) => (
  <div {...{ className }}>
    <div className='view-select'>
      <CalendarViewMonthIcon color='primary' />
      <select value={viewIndex} onChange={onViewChange}>
        {VIEWS.map((view, i) => (
          <option key={i} value={view.value}>
            {view.name}
          </option>
        ))}
      </select>
    </div>
    <div className='graph'>
      <TimelineIcon />
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  border: 5px solid #3498db;
  select {
    border: 0;
    height: 40px;
    color: #3498db;
    width: 100%;
    padding: 0 8px;
    font-size: 90%;
  }

  svg {
    fill: #3498db;
  }

  border-radius: 3px;
  padding: 0 0 0 4px;
  width: 350px;
  display: flex;
  align-items: center;
  div {
    width: 250px;
    border: 0 !important;
  }

  .graph {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 40px;
    background-color: #3498db;

    svg {
      width: 90px;
      height: 40px;
      fill: #fff;
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
