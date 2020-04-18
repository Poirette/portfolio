import React from "react";
import ThemeManager from "./src/components/ThemeManager";
import { darkTheme, lightTheme } from './src/theme';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100vh;
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
