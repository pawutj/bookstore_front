import styled from "styled-components";
import { colors } from "../../styles/ci";

export const Navbar = styled.div.attrs(() => ({
  className: "navbar",
}))`
  background-image: linear-gradient(${colors.mainBg1}, ${colors.mainBg2});

  button {
    background-color: rgba(0, 0, 0, 0.1);
    border: rgba(0, 0, 0, 0);
    color: white;
    p {
      font-size: 14px;
    }
    :hover {
      color: white;
    }
  }
`;
