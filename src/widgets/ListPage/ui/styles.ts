import { styled } from "styled-components";

export const ListPageWidgetContainer = styled.div`
  margin: 23px 78px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    margin: 10px;
  }
`;
