import React from "react";
import styled from "styled-components";
import PrimitiveButton from "../../primitives/Button";

const StyledButton = styled(PrimitiveButton)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  background: ${(props) => {
    if (props.primary) {
      if (props.outline) {
        return props.theme.colors.white;
      } else {
        return props.theme.colors.primary;
      }
    }
  }};
  color: ${(props) => {
    if (props.primary) {
      if (props.outline) {
        return props.theme.colors.primary;
      } else {
        return props.theme.colors.white;
      }
    }
  }};
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
