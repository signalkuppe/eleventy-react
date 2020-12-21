import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-weight: 700;
    border: 1px solid ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    background: ${(props) => {
        if (props.primary) {
            if (props.outline) {
                return 'none';
            } else {
                return props.theme.colors.primary;
            }
        }
    }};
    color: ${(props) => {
        if (props.primary) {
            if (props.outline) {
                return props.theme.colors.primary;
            } else {
                return props.theme.colors.background;
            }
        }
    }};
`;

export default React.forwardRef(
    ({ primary, outline, children, ...props }, ref) => {
        return (
            <StyledButton
                ref={ref}
                primary={primary}
                outline={outline}
                {...props}
            >
                {children}
            </StyledButton>
        );
    },
);
