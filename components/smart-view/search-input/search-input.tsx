import React, { ChangeEventHandler, VFC, VFCX } from "react";
import styled from "@emotion/styled";
import { DeepReadonly } from "utility-types";
import { useRecoilState } from "recoil";
import { searchTextState } from "../../../states/search-text";

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps &
  DeepReadonly<{
    text: string;
    onTextChange: ChangeEventHandler<HTMLInputElement>;
  }>;

const Component: VFCX<Props> = ({ className, text, onTextChange }) => (
  <input
    className={className}
    value={text}
    onChange={onTextChange}
    placeholder="プラグインを検索"
  />
);

const StyledComponent = styled(Component)`
  padding: 16px 24px;
  font-size: 110%;
  border-radius: 8px;
  border: 0;
  width: 600px;
  background-color: var(--color-backward);
  box-shadow: var(--elevation-primary);
`;

const Container: VFC<ContainerProps> = () => {
  const [text, setText] = useRecoilState(searchTextState);

  const onTextChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setText(e.target.value);
  };

  return <StyledComponent {...{ text, onTextChange }} />;
};

export default Container;
