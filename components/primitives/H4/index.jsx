import React from "react";
import styled, { css } from "styled-components";
import { headingFontSize } from "../utils";

const styles = css`
  font-weight: 700;
  line-height: 1.2;
  font-size: ${(props) => headingFontSize(props, props.styledAs || 4)};
  ${(props) =>
    !props.noMargins &&
    css`
      margin-top: calc(${(props) => props.theme.spaceUnit} * 2);
      margin-bottom: calc(${(props) => props.theme.spaceUnit} / 2);
    `}
`;

const StyledHeading = styled.h4`
  ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
});
