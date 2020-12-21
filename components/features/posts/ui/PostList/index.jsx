import React from 'react';
import styled from 'styled-components';
import { postSlug } from '../../utils';
import Ul from '../../../../primitives/Ul';
import Li from '../../../../primitives/Li';
import A from '../../../../primitives/A';
import PostCard from '../PostCard';

const StyledList = styled(Ul)`
    display: grid;
    grid-gap: ${(props) => props.theme.spaceUnit};
    grid-template-columns: repeat(auto-fill, minmax(10rem, 15rem));
    justify-content: center;
`;

export default function PostList({ posts }) {
    return (
        <StyledList reset>
            {posts.map((post, i) => {
                return (
                    <Li key={i}>
                        <A href={postSlug(post)} wrapper>
                            <PostCard post={post.data} />
                        </A>
                    </Li>
                );
            })}
        </StyledList>
    );
}
