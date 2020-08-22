import React from "react";
import styled from "styled-components";
import PrimitiveParagraph from "../../primitives/Paragraph";

const StyledParagraph = styled(PrimitiveParagraph)``;

export default function Paragraph({ children, ...props }) {
  return <StyledParagraph {...props}>{children}</StyledParagraph>;
}
