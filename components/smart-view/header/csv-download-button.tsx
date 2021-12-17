import React, { VFC, VFCX } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import { useSnackbar } from 'notistack';
import { Button, Tooltip } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

import { filteredPluginsState } from '../../../states/kintone-plugins';
import { KintonePlugin } from '../../../static/plugin';

type Props = DeepReadonly<{ onClick: () => void }>;

const Component: VFCX<Props> = ({ onClick, className }) => (
  <Tooltip title='現在の検索条件でCSVファイルを出力します'>
    <Button
      {...{ className }}
      variant='contained'
      color='inherit'
      endIcon={<GetAppIcon />}
      onClick={onClick}
    >
      CSV
    </Button>
  </Tooltip>
);

const StyledComponent = styled(Component)`
  color: #1976d2;
  background-color: #f1f1f7;
  &:hover,
  &:active {
    background-color: #e1e1ea;
  }
`;

const Container: VFC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const onClick = useRecoilCallback(({ snapshot }) => async () => {
    try {
      const plugins = await snapshot.getPromise(filteredPluginsState);

      if (!plugins.length) {
        enqueueSnackbar('対象レコードが存在しないため、CSVを出力できませんでした。', {
          variant: 'warning',
        });
        return;
      }
      download(plugins);

      enqueueSnackbar('CSVを出力しました', { variant: 'success' });
    } catch (error) {
      console.error('CSV出力に失敗しました', error);
      enqueueSnackbar('CSV出力に失敗しました', { variant: 'error' });
    }
  });

  return <StyledComponent {...{ onClick }} />;
};

export default Container;

const download = (plugins: KintonePlugin[]) => {
  const body = plugins.map((plugin) => [plugin.author, plugin.name, plugin.price]);

  const data = [...body].map((row) => row.join(',')).join('\r\n');

  const bom = new Uint8Array([0xef, 0xbb, 0xbf]);
  const blob = new Blob([bom, data], { type: 'text/csv' });
  const url = (window.URL || window.webkitURL).createObjectURL(blob);

  const link = document.createElement('a');
  link.download = 'view.csv';
  link.href = url;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
