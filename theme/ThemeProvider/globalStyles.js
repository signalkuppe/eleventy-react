import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    margin: 0;
    font-size: 112.5%;
  }
  body {
    font-family: ${(props) => props.theme.type.fontSans};
  }
`;

export default GlobalStyles;
