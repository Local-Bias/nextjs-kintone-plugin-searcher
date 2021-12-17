export const VIEWS = [
  { name: 'すべて', value: 1 },
  { name: '無償プラグインのみ', value: 2 },
  { name: '有償プラグインのみ', value: 3 },
  { name: '(すべて)', value: 4 },
];

export const APP_NAME = 'kintone プラグイン簡易検索(WIP)';

export const HEADER_LABELS = [
  '作者',
  'プラグイン名',
  '料金体系',
  '価格',
  '価格(月換算)',
  '価格(年換算)',
  '試用版',
  '備考',
] as const;

export type HeaderLabel = typeof HEADER_LABELS[number];
