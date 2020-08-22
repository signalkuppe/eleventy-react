import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./globalStyles";

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
}
