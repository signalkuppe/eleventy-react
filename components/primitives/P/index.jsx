import React from "react";
import styled, { css } from "styled-components";

const StyledParagraph = styled.p`
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  & + & {
    margin-top: ${(props) => props.theme.spaceUnit};
  }
`;

export default React.forwardRef(({ center, children, ...props }, ref) => {
  return (
    <StyledParagraph ref={ref} center={center} {...props}>
      {children}
    </StyledParagraph>
  );
});
