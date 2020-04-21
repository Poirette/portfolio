import React from "react";
import ThemeManager from "./src/components/ThemeManager";
import { darkTheme, lightTheme } from './src/theme';
import { createGlobalStyle } from "styled-components";

const device = {
  mobileS: '(min-width: 320px)',
  mobileM: '(min-width: 375px)',
  mobileL: '(min-width: 425px)',
  tablet: '(min-width: 768px)',
  laptop: '(min-width: 1024px)',
  laptopL: '(min-width: 1440px)',
  desktop: '(min-width: 2560px)',
};

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;

      font-size: 12px;

    @media ${device.tablet} {
      font-size: 16px;
    }
  }

  body {
    background-color: ${props => props.theme.color.background};
    transition: background-color, color 400ms ease-out;
    color: ${props => props.theme.color.text};;
  }
`;

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeManager lightTheme={lightTheme} darkTheme={darkTheme}>
      <GlobalStyle />
      {element}
    </ThemeManager>
  );
};
