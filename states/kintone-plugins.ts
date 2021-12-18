import { atom, selector } from 'recoil';
import { KintonePlugin, KINTONE_PLUGINS } from '../static/plugin';
import { searchTextState } from './search-text';
import { paginationChunkState, paginationIndexState } from './pagination';
import { HeaderLabel } from '../static/app';
import { kintoneViewIndexState } from './view-index';
import { fieldSortingState } from './sorting';

export type FormattedPlugin = Record<HeaderLabel, string | number | null> & KintonePlugin;

export const kintonePluginsState = atom<KintonePlugin[]>({
  key: 'kintonePluginsState',
  default: KINTONE_PLUGINS,
});

export const formattedPluginsState = selector<FormattedPlugin[]>({
  key: 'formattedPluginsState',
  get: ({ get }) => {
    const _plugins = get(kintonePluginsState);

    const plugins = [..._plugins].filter((plugin) => !plugin.closed);

    return plugins.map<FormattedPlugin>((plugin) => {
      const isFree = plugin.priceType === '無料';
      const needsConsultation = plugin.priceType === '要相談';
      const isKaikiri = plugin.priceType === '買い切り';
      const isMonthly = plugin.priceType === 'サブスクリプション(月額)';
      const isYearly = plugin.priceType === 'サブスクリプション(年額)';

      const monthly = isFree
        ? 0
        : isKaikiri || isMonthly || needsConsultation
        ? plugin.price ?? null
        : isYearly
        ? Math.round((plugin.price as number) / 12)
        : null;

      const yearly = isFree
        ? 0
        : isKaikiri || isYearly || needsConsultation
        ? plugin.price ?? null
        : isMonthly
        ? ((plugin.price as number) || 0) * 12
        : null;

      return {
        ...plugin,
        作者: plugin.author,
        プラグイン名: plugin.name,
        価格: plugin.price || '',
        '価格(月換算)': monthly,
        '価格(年換算)': yearly,
        料金体系: plugin.priceType || '----',
        試用版: plugin.trialVersion ? 'あり' : '----',
        備考: plugin.memo || '',
      };
    });
  },
});

export const filteredPluginsState = selector<FormattedPlugin[]>({
  key: 'filteredPluginsState',
  get: ({ get }) => {
    const plugins = get(formattedPluginsState);
    const input = get(searchTextState);
    const viewIndex = get(kintoneViewIndexState);

    let viewFiltered = [...plugins];
    if (viewIndex === 1) {
      viewFiltered = plugins.filter((plugin) => plugin.priceType === '無料');
    } else if (viewIndex === 2) {
      viewFiltered = plugins.filter(
        (plugin) =>
          plugin.priceType === 'サブスクリプション(年額)' ||
          plugin.priceType === 'サブスクリプション(月額)' ||
          plugin.priceType === '買い切り'
      );
    }

    if (!input) {
      return viewFiltered.sort((a, b) => a.name.localeCompare(b.name));
    }

    const words = input.toLowerCase().split(/\s+/g);

    const filtered = viewFiltered.filter((plugin) =>
      words.every(
        (word) =>
          plugin.author.toLowerCase().includes(word) || plugin.name.toLowerCase().includes(word)
      )
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  },
});

const sortedPluginState = selector<FormattedPlugin[]>({
  key: 'sortedPluginState',
  get: ({ get }) => {
    const plugins = get(filteredPluginsState);
    const sorting = get(fieldSortingState);

    const label = sorting.label;

    if (!label) {
      return plugins;
    }

    const sortsDesc = sorting.order === 'desc';

    const sorted = [...plugins].sort((pluginA, pluginB) => {
      const a = pluginA[label];
      const b = pluginB[label];

      if (a === null && b === null) {
        return 0;
      } else if (a === null) {
        return sortsDesc ? 1 : -1;
      } else if (b === null) {
        return sortsDesc ? -1 : 1;
      }

      if (typeof a === 'number' && typeof b === 'number') {
        return sortsDesc ? b - a : a - b;
      } else if (typeof a === 'number' || typeof b === 'number') {
        const compare = String(a).localeCompare(String(b));
        return sortsDesc ? compare : compare * -1;
      }
      const localeCompared = a.localeCompare(b, 'ja');

      return sorting.order === 'desc' ? localeCompared * -1 : localeCompared;
    });

    return sorted;
  },
});

export const displayingPluginsState = selector<FormattedPlugin[]>({
  key: 'displayingPluginsState',
  get: ({ get }) => {
    const plugins = get(sortedPluginState);
    const index = get(paginationIndexState);
    const chunk = get(paginationChunkState);

    return plugins.slice((index - 1) * chunk, index * chunk);
  },
});
