import { createGlobalStyle } from "styled-components";
import device from "../utils/device";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
    font-size: 12px;

    @media ${device.tablet} {
      font-size: 14px;
    }

    @media ${device.laptop} {
      font-size: 16px;
    }
  }

  body {
    background-color: ${props => props.theme.color.background};
    transition: background-color, color 400ms ease-out;
    color: ${props => props.theme.color.text};;
  }
`;

export default GlobalStyle;
