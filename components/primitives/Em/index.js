import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  font-style: italic;
`;

const StyledEm = styled.em`
  ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledEm ref={ref} {...props}>
      {children}
    </StyledEm>
  );
});
