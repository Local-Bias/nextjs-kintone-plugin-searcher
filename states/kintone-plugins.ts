import { atom, selector } from "recoil";
import { KintonePlugin, KINTONE_PLUGINS } from "../static/plugin";
import { searchTextState } from "./search-text";
import { paginationChunkState, paginationIndexState } from "./pagination";

export const kintonePluginsState = atom<KintonePlugin[]>({
  key: "kintonePluginsState",
  default: KINTONE_PLUGINS,
});

export const filteredPluginsState = selector<KintonePlugin[]>({
  key: "filteredPluginsState",
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
          plugin.author.toLowerCase().includes(word) ||
          plugin.name.toLowerCase().includes(word)
      )
    );

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
  },
});

export const displayingPluginsState = selector<KintonePlugin[]>({
  key: "displayingPluginsState",
  get: ({ get }) => {
    const plugins = get(filteredPluginsState);
    const index = get(paginationIndexState);
    const chunk = get(paginationChunkState);

    return plugins.slice((index - 1) * chunk, index * chunk);
  },
});
