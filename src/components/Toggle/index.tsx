import useThemeMode from "hooks/useThemeMode";
import { useState } from "react";
import {
  Ball,
  CheckBox,
  Container,
  MoonIcon,
  SunIcon,
  Wrapper,
} from "./styles";

interface Props {
  theme: string;
  themeToggler: () => void;
}

const Toggle = ({ theme, themeToggler }: Props) => {
  return (
    <Container>
      <CheckBox
        onChange={() => false}
        onClick={themeToggler}
        type="checkbox"
        id="checkbox"
        checked={theme === "dark"}
      />
      <Wrapper htmlFor="checkbox">
        <SunIcon color="#e2d111" />
        <MoonIcon color="#4B5EFC" />
        <Ball />
      </Wrapper>
    </Container>
  );
};

export default Toggle;
