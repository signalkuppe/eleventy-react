import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: ${(props) => {
    if (props.bold) {
      return 700;
    } else {
      return 400;
    }
  }};
`;

export default React.forwardRef(({ bold, children, ...props }, ref) => {
  return (
    <StyledSpan ref={ref} bold={bold} {...props}>
      {children}
    </StyledSpan>
  );
});
