import React from "react";
import styled, { css } from "styled-components";

const StyledSpan = styled.span`
  ${(props) =>
    props.bold &&
    css`
      font-weight: 700;
    `}
  ${(props) =>
    props.italic &&
    css`
      font-style: italic;
    `}
`;

export default React.forwardRef(({ bold, children, ...props }, ref) => {
  return (
    <StyledSpan ref={ref} bold={bold} {...props}>
      {children}
    </StyledSpan>
  );
});
