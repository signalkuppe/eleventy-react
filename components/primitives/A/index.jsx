import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    color: ${(props) => props.theme.colors.primary};
    text-decoration: underline;
    ${(props) =>
        props.wrapper &&
        css`
            text-decoration: none;
            color: inherit;
        `}
`;

const StyledLink = styled.a`
    ${styles}
`;

export { styles };

export default React.forwardRef(({ wrapper, children, ...props }, ref) => {
    return (
        <StyledLink wrapper={wrapper} {...props}>
            {children}
        </StyledLink>
    );
});
