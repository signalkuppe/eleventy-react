import React from "react";
import styled from "styled-components";
import Header from "../../primitives/Header";
import Main from "../../primitives/Main";
import ThemeProvider from "../../../theme";
import Menu from "../Menu";
import H1 from "../../primitives/H1";

const StyledHeader = styled(Header)`
  display: flex;
  justify-content: center;
  margin: calc(${(props) => props.theme.spaceUnit} * 2) 0;
`;

const StyledMain = styled(Main)`
  width: 90vw;
  max-width: 50rem;
  margin: calc(${(props) => props.theme.spaceUnit} * 2) auto;
`;

const StyledH1 = styled(H1)`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spaceUnit};
`;

export default function Default({ head, title, children, scripts }) {
  return (
    <ThemeProvider>
      <html lang="en">
        {head}
        <body>
          <StyledHeader>
            <Menu />
          </StyledHeader>
          {title && <StyledH1>{title}</StyledH1>}
          <StyledMain>{children}</StyledMain>
          {scripts}
        </body>
      </html>
    </ThemeProvider>
  );
}
