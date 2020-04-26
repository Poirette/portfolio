import React from "react";

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
