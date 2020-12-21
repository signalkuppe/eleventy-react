import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    ${(props) =>
        props.center &&
        css`
            text-align: center;
        `}
    + p {
        margin-top: ${(props) => props.theme.spaceUnit};
    }
`;

const StyledParagraph = styled.p`
    ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledParagraph ref={ref} {...props}>
            {children}
        </StyledParagraph>
    );
});
