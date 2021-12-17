import React, { VFC } from "react";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { Pagination } from "@mui/material";
import { filteredPluginsState } from "../../../states/kintone-plugins";
import {
  paginationChunkState,
  paginationIndexState,
} from "../../../states/pagination";

type Props = {
  size: number;
  index: number;
  setIndex: SetterOrUpdater<number>;
  chunkSize: number;
};

const Component: VFC<Props> = ({ size, index, setIndex, chunkSize }) => (
  <Pagination
    className="ribbit-pagination"
    count={Math.ceil(size / chunkSize)}
    page={index}
    color="primary"
    onChange={(_, index) => setIndex(index)}
  />
);

const Container: VFC = () => {
  const plugins = useRecoilValue(filteredPluginsState);
  const [index, setIndex] = useRecoilState(paginationIndexState);
  const chunkSize = useRecoilValue(paginationChunkState);

  const size = plugins.length || 0;

  return (
    <>{!!size && <Component {...{ size, index, setIndex, chunkSize }} />}</>
  );
};

export default Container;
