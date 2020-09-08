import React from "react";
import styled from "styled-components";
import Div from "../../primitives/div";

const StyledVerticalSpace = styled(Div)`
  margin-top: ${(props) => {
    return "calc(" + (props.size || 1) + " * " + props.theme.spaceUnit + ")";
  }};
`;

export default function VerticalSpace(props) {
  return <StyledVerticalSpace aria-hidden="true" {...props} />;
}
