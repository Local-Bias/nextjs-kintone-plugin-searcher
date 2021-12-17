import React, { VFC, VFCX } from "react";
import styled from "@emotion/styled";
import { DeepReadonly } from "utility-types";

import Header from "./header";
import Table from "./table";
import Footer from "./footer";

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <Header />
    <Table />
    <Footer />
  </div>
);

const StyledComponent = styled(Component)`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
