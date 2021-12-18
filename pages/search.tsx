import React, { VFC } from 'react';
import Head from 'next/head';

import SmartView from '../components/smart-view';
import { APP_NAME } from '../static/app';
import KintoneHeader from '../components/kintone/header';
import KintoneToolbar from '../components/kintone/toolbar';
import KintoneTitlebar from '../components/kintone/titlebar';
import KintoneAppToolbar from '../components/kintone/app-toolbar';
import KintoneInfobar from '../components/kintone/infobar';

const Component: VFC = () => (
  <div>
    <Head>
      <title>{APP_NAME}</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap'
        rel='stylesheet'
      />
    </Head>
    <KintoneHeader />
    <KintoneToolbar />
    <KintoneTitlebar />
    <KintoneInfobar />
    <KintoneAppToolbar />
    <SmartView />
  </div>
);

export default Component;
