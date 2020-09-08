import React from "react";
import styled, { css } from "styled-components";

const StyledList = styled.dl`
  ${(props) =>
    !props.reset &&
    css`
      margin: ${(props) => props.theme.spaceUnit} 0;
      dt {
        font-weight: 700;
      }
      dd + dt {
        margin-top: ${(props) => props.theme.spaceUnit};
      }
    `}
`;

export default React.forwardRef(({ reset, children, ...props }, ref) => {
  return (
    <StyledList reset={reset} ref={ref} {...props}>
      {children}
    </StyledList>
  );
});
