import React from 'react';
import styled from 'styled-components';
import client from './index.client.js';
import { userSlug } from '../../utils';
import Script from '../../../../ui/Script';
import Ul from '../../../../primitives/Ul';
import A from '../../../../primitives/A';
import Li from '../../../../primitives/Li';
import UserCard from '../UserCard';

const StyledList = styled(Ul)`
    display: grid;
    grid-gap: ${(props) => props.theme.spaceUnit};
    grid-template-columns: repeat(auto-fill, minmax(10rem, 15rem));
    justify-content: center;
`;

export default function UserList({ users }) {
    return (
        <>
            <StyledList reset>
                {users.map((user, i) => (
                    <Li key={user.id}>
                        <A href={userSlug(user)} wrapper>
                            <UserCard user={user} />
                        </A>
                    </Li>
                ))}
            </StyledList>
            <Script>{client}</Script>
        </>
    );
}
