import React from "react";
import styled, { css } from "styled-components";
import { headingFontSize } from "../utils";

const style = css`
  font-weight: 700;
  line-height: 1.2;
  font-size: ${(props) => headingFontSize(props, props.styledAs || 6)};
  ${(props) =>
    !props.noMargins &&
    css`
      margin-top: calc(${(props) => props.theme.spaceUnit} * 2);
      margin-bottom: calc(${(props) => props.theme.spaceUnit} / 2);
    `}
`;

const StyledHeading = styled.h6`
  ${style}
`;

export { style };

export default React.forwardRef(({ children, ...props }, ref) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
});
