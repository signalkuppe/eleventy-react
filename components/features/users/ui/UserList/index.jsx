import React from "react";
import styled from "styled-components";
import { userSlug } from "../../utils";
import Ul from "../../../../primitives/Ul";
import A from "../../../../primitives/A";
import UserCard from "../UserCard";

const StyledList = styled(Ul)`
  display: grid;
  grid-gap: ${(props) => props.theme.spaceUnit};
  grid-template-columns: repeat(auto-fill, minmax(10rem, 15rem));
  justify-content: center;
`;

export default function UserList({ users }) {
  return (
    <StyledList reset simple>
      {users.map((user, i) => (
        <A href={userSlug(user)} key={user.id} wrapper>
          <UserCard user={user} />
        </A>
      ))}
    </StyledList>
  );
}
