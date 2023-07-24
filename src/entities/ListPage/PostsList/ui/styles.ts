import { styled } from "styled-components";

export const PostsListTable = styled.table`
  border-spacing: 0;
  width: 100%;
  border: 1px solid #e3e6ec;

  thead {
    background-color: #474955;
    color: #fff;
  }

  th {
    text-align: center;
    padding: 18px 23px;
    cursor: pointer;
    font-size: 14px;

    &:first-child {
      width: 15%;
    }

    &:nth-child(2) {
      width: 50%;
    }

    @media screen and (max-width: 578px) {
      padding: 15px 10px;

      &:nth-child(2) {
        width: 40%;
      }
    }
  }

  td {
    padding: 15px 11px;
    border-bottom: 1px solid #e3e6ec;

    &:first-child {
      text-align: center;
    }
  }

  th {
    background-color: #474955;
    color: #fff;
    font-weight: bold;
  }

  tr:last-child td {
    border-bottom: none;
  }

  /* Add vertical lines */
  tr td {
    border-right: 1px solid #e3e6ec;
  }
`;
