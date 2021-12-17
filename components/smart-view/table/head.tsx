import React, { VFC } from 'react';
import { useSetRecoilState } from 'recoil';
import { DeepReadonly } from 'utility-types';
import { paginationIndexState } from '../../../states/pagination';
import { fieldSortingState } from '../../../states/sorting';
import { HeaderLabel, HEADER_LABELS } from '../../../static/app';

type Props = DeepReadonly<{ onCellClick: (label: HeaderLabel) => void }>;

const Component: VFC<Props> = ({ onCellClick }) => (
  <thead>
    <tr>
      {HEADER_LABELS.map((label, i) => (
        <th key={i} onClick={() => onCellClick(label)}>
          {label}
        </th>
      ))}
    </tr>
  </thead>
);

const Container: VFC = () => {
  const setPaginationIndex = useSetRecoilState(paginationIndexState);
  const setSorting = useSetRecoilState(fieldSortingState);

  const onCellClick = (label: HeaderLabel) => {
    setPaginationIndex(1);
    setSorting((_sorting) => {
      const order =
        _sorting.label === label ? (_sorting.order === 'desc' ? 'asc' : 'desc') : 'desc';
      return { label, order };
    });
  };

  return <Component {...{ onCellClick }} />;
};

export default Container;
