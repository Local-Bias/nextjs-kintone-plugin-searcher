import Link from 'next/link';
import React, { VFC } from 'react';
import { useRecoilValue } from 'recoil';
import { FormattedPlugin, formattedPluginsState } from '../../../states/kintone-plugins';
import { HEADER_LABELS } from '../../../static/app';
import LinkIcon from '@mui/icons-material/Link';

type Props = Readonly<{ plugins: FormattedPlugin[] }>;

const Component: VFC<Props> = ({ plugins }) => (
  <tbody>
    {plugins.map((plugin, i) => (
      <tr key={i}>
        <td>
          <Link href={plugin.url}>
            <a target='_blank' rel='noreferrer'>
              {plugin['作者']}
              <LinkIcon />
            </a>
          </Link>
        </td>
        <td>
          <Link href={plugin.url}>
            <a target='_blank' rel='noreferrer'>
              {plugin['プラグイン名']}
              <LinkIcon />
            </a>
          </Link>
        </td>
        <td>{plugin['料金体系']}</td>
        <td className='right'>{plugin['価格']}</td>
        <td className='right'>{plugin['価格(月換算)']}</td>
        <td className='right'>{plugin['価格(年換算)']}</td>
        <td>{plugin['試用版']}</td>
        <td>{plugin['備考']}</td>
      </tr>
    ))}
  </tbody>
);

const Container: VFC = () => {
  const plugins = useRecoilValue(formattedPluginsState);

  return <Component {...{ plugins }} />;
};

export default Container;
