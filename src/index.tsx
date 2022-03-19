import ReactDOM from "react-dom";
import App from "./App";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
