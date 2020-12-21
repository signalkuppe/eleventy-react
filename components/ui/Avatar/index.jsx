import React from 'react';
import styled from 'styled-components';
import Img from '../../primitives/Img';

const AvatarImage = styled(Img)`
    width: ${(props) => props.size}rem;
    height: ${(props) => props.size}rem;
    object-fit: cover;
    border-radius: 50%;
`;

export default function Avatar({ image, size, ...props }) {
    size = size || 6;
    return <AvatarImage src={image} {...props} size={size} />;
}
