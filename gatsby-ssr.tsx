import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

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

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  const App = () => (
    <StyleSheetManager sheet={sheet.instance}>
      {bodyComponent}
    </StyleSheetManager>
  );

  replaceBodyHTMLString(renderToString(<App />));
  setHeadComponents([sheet.getStyleElement()]);
};