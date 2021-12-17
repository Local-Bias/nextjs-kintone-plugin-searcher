import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { displayingPluginsState } from '../../../states/kintone-plugins';
import { KintonePlugin } from '../../../static/plugin';
import Link from 'next/link';
import LinkIcon from '@mui/icons-material/Link';

type Props = Readonly<{ plugins: KintonePlugin[] }>;

const Component: VFC<Props> = ({ plugins }) => (
  <tbody>
    {plugins.map((plugin, i) => (
      <tr key={i}>
        <td className='left'>
          <Link href={plugin.url}>
            <a target='_blank' rel='noreferrer'>
              {plugin.author}
              <LinkIcon />
            </a>
          </Link>
        </td>
        <td>
          <Link href={plugin.url}>
            <a target='_blank' rel='noreferrer'>
              {plugin.name}
              <LinkIcon />
            </a>
          </Link>
        </td>
        <td>{plugin.priceType}</td>
        <td>{plugin.price}</td>
        <td className='right'>
          &yen;
          {plugin.priceType === '無料'
            ? 0
            : plugin.price === '要相談'
            ? plugin.price
            : plugin.priceType === '買い切り' || plugin.priceType === 'サブスクリプション(月額)'
            ? plugin.price
            : plugin.priceType === 'サブスクリプション(年額)'
            ? Math.round((plugin.price || 0) / 12).toLocaleString()
            : ''}
        </td>
        <td className='right'>
          &yen;
          {plugin.priceType === '無料'
            ? 0
            : plugin.price === '要相談'
            ? plugin.price.toLocaleString()
            : plugin.priceType === '買い切り' || plugin.priceType === 'サブスクリプション(年額)'
            ? (plugin.price || 0).toLocaleString()
            : plugin.priceType === 'サブスクリプション(月額)'
            ? ((plugin.price || 0) * 12).toLocaleString()
            : ''}
        </td>
        <td>{plugin.priceType === '無料' ? '----' : plugin.trialVersion ? 'あり' : 'なし'}</td>
      </tr>
    ))}
  </tbody>
);

const Container: VFC = () => {
  const plugins = useRecoilValue(displayingPluginsState);

  return <Component {...{ plugins }} />;
};

export default Container;
