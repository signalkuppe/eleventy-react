import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    ${(props) =>
        !props.reset &&
        css`
            list-style-type: disc;
            list-style-position: inside;
            margin: ${(props) => props.theme.spaceUnit} 0;
            padding-left: calc(${(props) => props.theme.spaceUnit} * 2);
        `}

    ${(props) =>
        props.inline &&
        css`
            display: flex;
            > * + * {
                margin-left: ${(props) => props.theme.spaceUnit};
            }
        `};
`;

const StyledList = styled.ul`
    ${styles}
`;

export { styles };

export default React.forwardRef(({ children, ...props }, ref) => {
    return <StyledList {...props}>{children}</StyledList>;
});
