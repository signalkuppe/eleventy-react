import React from "react";
import styled from "styled-components";
import Span from "../../primitives/Span";

const StyledIcon = styled(Span)`
  margin-right: ${(props) => (props.left ? "0.5em" : "0px")};
  margin-left: ${(props) => (props.right ? "0.5em" : "0px")};
  svg {
    display: inline-block;
    font-size: inherit;
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
  }
`;

export default React.forwardRef(({ icon, ...props }, ref) => {
  const Svg = icon;
  return (
    <StyledIcon ref={ref} {...props}>
      {Svg && <Svg />}
    </StyledIcon>
  );
});
