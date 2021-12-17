import React, { VFC } from "react";
import styled from "@emotion/styled";

type ContainerProps = Readonly<{ className?: string }>;
type Props = ContainerProps & Readonly<{}>;

const Component: VFC<Props> = ({ className }) => (
  <div {...{ className }}>
    <div></div>
  </div>
);

const StyledComponent = styled(Component)``;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
