import { ThemeProvider } from "styled-components";
import * as Theme from "../src/styles/tokens/index";
import Home from "./pages/Home";
import GlobalStyle from "./styles/reset";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
