import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 41px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  .pagination_button {
    color: #474955;
    font-size: 24px;
    font-weight: 500;
  }

  .number_button {
    color: #474955;
    font-size: 18px;
    font-style: italic;
    font-weight: 700;

    &.active {
      color: #7ebc3c;
    }
  }

  @media screen and (max-width: 578px) {
    .pagination_button {
      font-size: 18px;
    }

    .number_button {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
