import React from "react";
import styled from "styled-components";
import { headingFontSize } from "../utils";

const StyledHeading = styled.h2`
  font-weight: ${(props) => props.theme.type.headingFontWeight};
  line-height: ${(props) => props.theme.type.headingLeading};
  font-size: ${(props) => headingFontSize(props, props.styledAs || 2)};
`;

export default React.forwardRef(({ styledAs, children, ...props }, ref) => {
  return (
    <StyledHeading styledAs={styledAs} {...props}>
      {children}
    </StyledHeading>
  );
});
