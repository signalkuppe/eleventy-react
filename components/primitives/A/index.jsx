import React from "react";
import styled, { css } from "styled-components";

const StyledLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  ${(props) =>
    props.wrapper &&
    css`
      text-decoration: none;
      color: inherit;
    `}
`;

export default React.forwardRef(({ wrapper, children, ...props }, ref) => {
  return (
    <StyledLink wrapper={wrapper} {...props}>
      {children}
    </StyledLink>
  );
});
