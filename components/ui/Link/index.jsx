import React from "react";
import styled from "styled-components";
import PrimitiveLink from "../../primitives/Link";

const StyledLink = styled(PrimitiveLink)`
  color: ${(props) => props.theme.colors.primary};
`;

export default function Link({ children, ...props }) {
  return <StyledLink {...props}>{children}</StyledLink>;
}
