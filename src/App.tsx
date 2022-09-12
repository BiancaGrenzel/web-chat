import { ThemeProvider } from "styled-components";
import * as Theme from "../src/styles/tokens/index";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
