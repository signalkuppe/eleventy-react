import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  font-weight: 700;
`;

const StyledStrong = styled.strong`
  ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledStrong ref={ref} {...props}>
      {children}
    </StyledStrong>
  );
});
