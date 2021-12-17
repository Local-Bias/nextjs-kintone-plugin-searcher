import React, { Suspense, VFC } from "react";
import { useRecoilValue } from "recoil";

import Layout from "./layout";
import Head from "./head";
import Body from "./body";
import Empty from "./empty";
import RightClickMenu from "../right-click-menu";
import { filteredPluginsState } from "../../../states/kintone-plugins";

type Props = Readonly<{ exists: boolean }>;

const Component: VFC<Props> = ({ exists }) => (
  <Layout>
    {!exists && <Empty />}
    {exists && (
      <table>
        <Head />
        <Body />
      </table>
    )}
  </Layout>
);

const Container: VFC = () => {
  const filterdPlugins = useRecoilValue(filteredPluginsState);

  const exists = !!filterdPlugins.length;

  return (
    <>
      <Component {...{ exists }} />
    </>
  );
};

export default Container;
