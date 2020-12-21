import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span``;

export default React.forwardRef(({ children, ...props }, ref) => {
    return (
        <StyledSpan ref={ref} {...props}>
            {children}
        </StyledSpan>
    );
});
