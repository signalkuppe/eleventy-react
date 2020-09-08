import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  max-width: ${(props) => (props.responsive ? "100%" : null)};
  height: ${(props) => (props.responsive ? "auto" : null)};
`;

export default React.forwardRef(({ responsive, ...props }, ref) => {
  return <StyledImage ref={ref} responsive={responsive} {...props} />;
});
