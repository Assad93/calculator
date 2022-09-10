import Calculator from "components/Calculator";
import { ThemeProvider } from "styled-components";
import { Container } from "styles/container";
import lightTheme from "styles/themes/lightTheme";
import Toggle from "components/Toggle";
import useThemeMode from "hooks/useThemeMode";
import darkTheme from "styles/themes/darkTheme";

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <Toggle theme={theme} themeToggler={themeToggler} />
        <Calculator />
      </Container>
    </ThemeProvider>
  );
};

export default App;
