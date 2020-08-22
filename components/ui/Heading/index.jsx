import React from "react";
import styled from "styled-components";
import PrimitiveHeading from "../../primitives/Heading";

const StyledHeading = styled(PrimitiveHeading)`
  font-weight: 700;
`;

export default function Heading({ children, ...props }) {
  return <StyledHeading {...props}>{children}</StyledHeading>;
}
