import styled from "styled-components";
import { colors } from "../../styles/ci";

export const Button = styled.button.attrs(() => ({
  className: "btn",
}))`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  :hover {
    background-color: ${colors.gray};
    color: ${colors.white};
  }
`;
