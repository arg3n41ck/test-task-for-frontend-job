import { styled } from "styled-components";

export const InputContainer = styled.div`
  max-width: 631px;
  background: #5a5c66;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    background: none;
    font-size: 14px;
    outline: none;
    color: #fff;
    border: none;
    padding: 16px 26px;

    &::placeholder {
      color: #b2b7bf;
    }
  }

  svg {
    margin-right: 26px;
  }
`;
