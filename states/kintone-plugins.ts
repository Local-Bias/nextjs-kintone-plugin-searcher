import { atom, selector } from 'recoil';
import { KintonePlugin, KINTONE_PLUGINS } from '../static/plugin';
import { searchTextState } from './search-text';
import { paginationChunkState, paginationIndexState } from './pagination';
import { HeaderLabel } from '../static/app';

export type FormattedPlugin = Record<HeaderLabel, string> & KintonePlugin;

export const kintonePluginsState = atom<KintonePlugin[]>({
  key: 'kintonePluginsState',
  default: KINTONE_PLUGINS,
});

export const filteredPluginsState = selector<KintonePlugin[]>({
  key: 'filteredPluginsState',
  get: ({ get }) => {
    const plugins = get(kintonePluginsState);
    const input = get(searchTextState);

    if (!input) {
      return [...plugins].sort((a, b) => a.name.localeCompare(b.name));
    }

    const words = input.toLowerCase().split(/\s+/g);

    const filtered = plugins.filter((plugin) =>
      words.every(
        (word) =>
          plugin.author.toLowerCase().includes(word) || plugin.name.toLowerCase().includes(word)
      )
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  },
});

export const displayingPluginsState = selector<KintonePlugin[]>({
  key: 'displayingPluginsState',
  get: ({ get }) => {
    const plugins = get(filteredPluginsState);
    const index = get(paginationIndexState);
    const chunk = get(paginationChunkState);

    return plugins.slice((index - 1) * chunk, index * chunk);
  },
});

export const formattedPluginsState = selector<FormattedPlugin[]>({
  key: 'formattedPluginsState',
  get: ({ get }) => {
    const plugins = get(displayingPluginsState);

    return plugins.map<FormattedPlugin>((plugin) => {
      const isFree = plugin.priceType === '無料';
      const needsConsultation = plugin.price === '要相談';
      const isKaikiri = plugin.priceType === '買い切り';
      const isMonthly = plugin.priceType === 'サブスクリプション(月額)';
      const isYearly = plugin.priceType === 'サブスクリプション(年額)';

      const price = needsConsultation ? '要相談' : formatNumber(plugin.price);

      const monthly = isFree
        ? formatNumber(0)
        : isKaikiri || isMonthly || needsConsultation
        ? formatNumber(plugin.price)
        : isYearly
        ? formatNumber(Math.round((plugin.price as number) / 12))
        : '----';

      const yearly = isFree
        ? formatNumber(0)
        : isKaikiri || isYearly || needsConsultation
        ? formatNumber(plugin.price)
        : isMonthly
        ? formatNumber(((plugin.price as number) || 0) * 12)
        : '';

      return {
        ...plugin,
        作者: plugin.author,
        プラグイン名: plugin.name,
        価格: price,
        '価格(月換算)': monthly,
        '価格(年換算)': yearly,
        料金体系: plugin.priceType || '----',
        試用版: plugin.trialVersion ? 'あり' : '----',
        備考: plugin.memo || '',
      };
    });
  },
});

const formatNumber = (value: any | undefined) => (value ? `\xA5${value.toLocaleString()}` : '----');
