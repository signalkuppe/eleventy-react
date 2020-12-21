import React from 'react';
import styled, { css } from 'styled-components';
import { headingFontSize } from '../utils';

const StyledHeading = styled.h1`
    font-weight: 700;
    line-height: 1.1;
    font-size: ${(props) => headingFontSize(props, 1)};
    ${(props) =>
        !props.noMargins &&
        css`
            margin-top: calc(${(props) => props.theme.spaceUnit} * 2);
            margin-bottom: calc(${(props) => props.theme.spaceUnit} / 2);
        `}
`;

export default React.forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledHeading ref={ref} {...props}>
            {children}
        </StyledHeading>
    );
});
