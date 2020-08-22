import React from "react";
import styled from "styled-components";
import PrimitiveText from "../../primitives/Text";

const StyledText = styled(PrimitiveText)`
  font-weight: ${(props) => {
    if (props.bold) {
      return 700;
    } else {
      return 400;
    }
  }};
`;

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}
