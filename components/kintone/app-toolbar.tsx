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
  DeepReadonly<{ viewIndex: number; onViewChange: ChangeEventHandler<HTMLInputElement> }>;

const Component: VFCX<Props> = ({ className, viewIndex, onViewChange }) => (
  <div {...{ className }}>
    <div className='view-select'>
      <CalendarViewMonthIcon color='primary' />
      <TextField
        select
        variant='outlined'
        color='primary'
        size='small'
        sx={{ border: '0 !important' }}
        value={viewIndex}
        onChange={onViewChange}
      >
        {VIEWS.map((view, i) => (
          <MenuItem key={i} value={view.value}>
            {view.name}
          </MenuItem>
        ))}
      </TextField>
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 80px;
  display: flex;
  align-items: center;

  padding: 0 16px;

  .view-select {
    border: 5px solid #3498db;
    border-right: 90px solid #3498db;
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
    setViewIndex(e.target.value as number);
  };

  return <StyledComponent {...{ viewIndex, onViewChange }} />;
};

export default Container;
