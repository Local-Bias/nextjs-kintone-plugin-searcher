import { atom } from 'recoil';
import { HeaderLabel } from '../static/app';

type Sorting = { label: HeaderLabel | null; order: 'desc' | 'asc' };

export const fieldSortingState = atom<Sorting>({
  key: 'fieldSortingState',
  default: { label: null, order: 'desc' },
});
