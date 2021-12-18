import React, { VFC } from 'react';
import styled from '@emotion/styled';
import Head from 'next/head';
import Image from 'next/image';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FilterVintageIcon from '@mui/icons-material/FilterVintage';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import HomeIcon from '@mui/icons-material/Home';

import SmartView from '../components/smart-view';
import { APP_NAME } from '../static/app';
import KintoneHeader from '../components/kintone/header';
import KintoneAppToolbar from '../components/kintone/app-toolbar';

type ContainerProps = Readonly<{ className?: string }>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFC<Props> = ({ className }) => (
  <div {...{ className }}>
    <Head>
      <title>{APP_NAME}</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'
        rel='stylesheet'
      />
    </Head>
    <KintoneHeader />
    <div className='toolbar'>
      <LunchDiningIcon />
      <FilterVintageIcon />
      <FlatwareIcon />
      <FastfoodIcon />
    </div>
    <div className='titlebar'>
      <Image src='/images/puzzle.png' height={48} width={48} alt='App Icon' />
      <div>{APP_NAME}</div>
    </div>
    <div className='infobar'>
      <HomeIcon />
      <div>アプリ: {APP_NAME}</div>
    </div>
    <KintoneAppToolbar />
    <SmartView />
  </div>
);

const StyledComponent = styled(Component)`
  .toolbar {
    height: 48px;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: #4b4b4b;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 12px;

    svg {
      fill: #888;
      width: 30px;
      height: 30px;
    }
  }

  .titlebar {
    height: 48px;
    background-color: #d4d7d7;
    display: flex;
    align-items: center;
    gap: 16px;
    font-weight: 700;
    font-size: 16px;
    color: #000a;
  }

  .infobar {
    height: 40px;
    border-bottom: 1px solid #e3e7e8;
    display: flex;
    align-items: center;
    color: #888;
    fill: #888;
    font-size: 13px;
    gap: 12px;
    svg {
      width: 18px;
    }
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
