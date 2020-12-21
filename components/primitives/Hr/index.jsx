import React from 'react';
import styled, { css } from 'styled-components';

const styles = css`
    margin: ${(props) => props.theme.spaceUnit} 0;
    border-style: dashed;
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.grey};
`;

const StyledHr = styled.hr`
    ${styles}
`;

export { styles };

export default React.forwardRef(
    ({ reset, inline, children, ...props }, ref) => {
        return <StyledHr {...props} />;
    },
);
