import React from "react";
import styled from "styled-components";
import PrimitiveImage from "../../primitives/Image";

const StyledImage = styled(PrimitiveImage)``;

export default function Image({ children, ...props }) {
  return <StyledImage {...props} />;
}
