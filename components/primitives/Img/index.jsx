import React from "react";
import styled, { css } from "styled-components";

const styles = css`
  max-width: 100%;
  height: auto;
`;

const StyledImage = styled.img`
  ${styles}
`;

export { styles };

export default React.forwardRef(({ ...props }, ref) => {
  return <StyledImage ref={ref} {...props} />;
});
