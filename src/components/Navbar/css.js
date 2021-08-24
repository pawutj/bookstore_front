import styled from "styled-components";
import { colors } from "../../styles/ci";

export const Navbar = styled.div.attrs(() => ({
  className: "navbar px-4",
}))`
  background-image: linear-gradient(${colors.mainBg1}, ${colors.mainBg2});

  button {
    background-color: rgba(0, 0, 0, 0.1);
    border: rgba(0, 0, 0, 0);
    color: white;
    border-radius: 5px;
    p {
      font-size: 14px;
    }
    :hover {
      color: white;
    }
  }

  .logo {
    img {
      width: 150px;
    }
  }
`;
