import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import SunOut from "../../../../static/assets/sun.svg";
import SunIn from "../../../../static/assets/sun_in.svg";
import MoonOut from "../../../../static/assets/moon_out.svg";
import MoonIn from "../../../../static/assets/moon_in.svg";
import { ThemeManagerContext } from "../../ThemeManager";

const Container = styled.div`
  position: absolute;
  width: 6em;
  height: 6em;
  float: right;
  right: 0;
  top: -8px;
  cursor: pointer;
  transition: transform 400ms ease-out;
  transform: scale3d(0.9, 0.9, 0.9);

  &:hover {
    transform: scale3d(1, 1, 1);
  }

  & > svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

enum Transition {
  in = 'in',
  out = 'out',
};

const ThemeSelector = () => {
  const { isDark, toggleDark } = useContext(ThemeManagerContext);
  const [transition, setTransition] = useState<string>(null);

  const handleClick = () => {
    setTransition(Transition.in);
  };

  useEffect(() => {
    if (transition === Transition.in) {
      setTimeout(() => setTransition(Transition.out), 300);
    }

    if (transition === Transition.out) {
      toggleDark();
      setTimeout(() => setTransition(null), 300);
    }
  }, [transition]);

  return (
    <Container onClick={transition === null && handleClick}>
      {!isDark && transition !== Transition.out && <SunOut />}
      {!isDark && transition === Transition.out && <SunIn />}
      {isDark && transition === Transition.out && <MoonIn />}
      {isDark && transition !== Transition.out && <MoonOut />}
    </Container>
  );
};

export default ThemeSelector;
