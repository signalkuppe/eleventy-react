import React from "react";
import styled, { css } from "styled-components";

const StyledList = styled.ul`
  ${(props) =>
    !props.reset &&
    css`
      list-style-type: ${(props) => (props.type === "ol" ? "decimal" : "disc")};
      list-style-position: inside;
      margin-top: ${(props) => props.theme.spaceUnit};
      padding-left: calc(${(props) => props.theme.spaceUnit} * 2);
    `}
  ${(props) =>
    props.inline &&
    css`
      display: flex;
      > * + * {
        margin-left: ${(props) => props.theme.spaceUnit};
      }
    `};
`;

export default React.forwardRef(
  ({ reset, inline, children, ...props }, ref) => {
    return (
      <StyledList reset={reset} inline={inline} {...props}>
        {children}
      </StyledList>
    );
  }
);
