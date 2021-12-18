import React, { VFC, VFCX } from 'react';
import styled from '@emotion/styled';
import { DeepReadonly } from 'utility-types';
import Link from 'next/link';
import { LogoIcon } from '../icons';
import CakeIcon from '@mui/icons-material/Cake';

type ContainerProps = DeepReadonly<{}>;
type Props = ContainerProps & DeepReadonly<{}>;

const Component: VFCX<Props> = ({ className }) => (
  <div {...{ className }}>
    <div>
      <Link href='/'>
        <div className='logo'>
          <LogoIcon />
          <div>ribbit</div>
        </div>
      </Link>
    </div>
    <div className='user'>
      <CakeIcon />
      ゲスト
    </div>
  </div>
);

const StyledComponent = styled(Component)`
  height: 64px;
  background-color: #fc0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;

  .logo {
    color: #000c;
    fill: #000c;
    font-family: 'Bakbak One', cursive;
    font-size: 28px;
    cursor: pointer;
    display: flex;
    gap: 8px;
  }

  .user {
    width: 270px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 100%;
    background-color: #0002;
    gap: 16px;
    color: #fff;

    svg {
      height: 36px;
    }
  }

  svg {
    width: 32px;
  }
`;

const Container: VFC<ContainerProps> = () => {
  return <StyledComponent />;
};

export default Container;
