import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import { ThemeManagerContext } from "../ThemeManager";

export const ToolTipProvider = () => {
  const { isDark } = useContext(ThemeManagerContext);

  const backgroundColor = isDark ? '#FFF': '#000';
  const textColor = isDark ? "#000" : "#FFF";

  return (
    <ReactTooltip
      place="bottom"
      effect="solid"
      textColor={textColor}
      backgroundColor={backgroundColor}
    />
  );
}


export default ToolTipProvider;
