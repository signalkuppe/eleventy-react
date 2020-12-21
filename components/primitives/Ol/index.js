import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    ${(props) =>
        !props.reset &&
        css`
            list-style-type: decimal;
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

const StyledList = styled.ol`
    ${styles}
`;

export { styles };

export default React.forwardRef(({ ...props }, ref) => {
    return <StyledList ref={ref} {...props} />;
});
