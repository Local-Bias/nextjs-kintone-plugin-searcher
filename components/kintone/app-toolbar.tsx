import React, { ChangeEventHandler, VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import { VIEWS } from '../../static/app';
import { MenuItem, TextField } from '@mui/material';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import { useRecoilState } from 'recoil';
import { kintoneViewIndexState } from '../../states/view-index';

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
  </div>
);

const StyledComponent = styled(Component)`
  height: 80px;
  display: flex;
  align-items: center;

  select {
    border: 0;
    height: 40px;
    color: #3498db;
    width: 100%;
    padding: 0 8px;
    font-size: 90%;
  }

  padding: 0 16px;

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

  const onViewChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setViewIndex(Number(e.target.value));
  };

  return <StyledComponent {...{ viewIndex, onViewChange }} />;
};

export default Container;
