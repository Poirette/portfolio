import React from "react";
import { ScreenClassProvider } from "react-grid-system";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { ToolTipProvider, ThemeManager } from "./src/components";
import { darkTheme, lightTheme, GlobalStyle } from "./src/theme";

export const wrapPageElement = ({ element }) => {
  return (
    <ThemeManager lightTheme={lightTheme} darkTheme={darkTheme}>
      <ToolTipProvider />
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