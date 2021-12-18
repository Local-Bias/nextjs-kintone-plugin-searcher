export const VIEWS = [
  { name: 'すべて', value: 0 },
  { name: '無償プラグインのみ', value: 1 },
  { name: '有償プラグインのみ', value: 2 },
  { name: '買い切りのみ', value: 3 },
  { name: 'サブスクリプションのみ', value: 4 },
  { name: '(すべて)', value: 5 },
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

export const INFO = [
  '掲載している情報は最新ではない可能性があります。',
  'プラグインをご利用の際は、必ず各遷移先で最新の情報をご確認ください。',
];
