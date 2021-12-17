import React, { FC } from "react";
import styled from "@emotion/styled";

type Props = Readonly<{ className?: string }>;

const Component: FC<Props> = ({ children, className }) => (
  <div {...{ className }}>{children}</div>
);

const StyledComponent = styled(Component)`
  table {
    width: 100%;
    white-space: nowrap;
    background-color: #fff;
    font-size: 88%;
    @media print {
      font-size: 100%;
    }

    th {
      font-weight: 400;
    }

    td {
      border-right: 1px solid #0002;
    }

    th,
    td {
      &:not(:first-of-type) {
        padding: 8px 15px;
      }
      &:first-of-type {
        padding: 8px 10px;
        width: 24px;
        border-left: 1px solid #0002;
      }
      &:last-of-type {
        border-right: 1px solid #0002;
      }
    }

    thead {
      tr {
        th {
          background-color: #fff;
          border-bottom: 1px solid #0002;
          border-top: 1px solid #0002;
          height: 24px;
          @media screen {
            position: sticky;
            top: 48px;
            z-index: 1;
          }

          &.sortable {
            cursor: pointer;
          }

          > div {
            display: flex;
            justify-content: center;
            align-items: center;

            > svg {
              width: 1em;
              height: 1em;
            }
          }
        }
      }
    }

    tbody {
      tr {
        line-height: 30px;

        td {
          background-color: #fff;
          transition: filter 0.1s ease;

          &:nth-of-type(1),
          &:nth-of-type(2) {
            text-align: left;
          }

          &.right {
            text-align: right;
          }

          a {
            display: flex;
            align-items: center;
            gap: 6px;
            svg {
              font-size: 18px;
              fill: #0008;
            }
          }
        }

        &:nth-of-type(2n + 1) {
          td {
            background-color: #f5f5f5;
          }
        }

        &:last-of-type {
          td {
            border-bottom: 1px solid #0002;
          }
        }

        &:hover {
          td {
            filter: brightness(0.95);
          }
        }
      }
    }
  }
`;

export default StyledComponent;
