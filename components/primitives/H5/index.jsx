import React from "react";
import styled, { css } from "styled-components";
import { headingFontSize } from "../utils";

const styles = css`
  font-weight: 700;
  line-height: 1.2;
  font-size: ${(props) => headingFontSize(props, props.styledAs || 5)};
`;

const StyledHeading = styled.h5`
  ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
});
