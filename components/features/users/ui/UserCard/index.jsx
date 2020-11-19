import React from "react";
import styled from "styled-components";
import Script from "../../../../ui/Script";
import client from "./client.mjs";
import { userFormat } from "../../utils";
import Article from "../../../../primitives/Article";
import Aside from "../../../../primitives/Aside";
import Header from "../../../../primitives/Header";
import Avatar from "../../../../ui/Avatar";
import H2 from "../../../../primitives/H2";

const StyledArticle = styled(Article)`
  background: ${(props) => props.theme.colors.backgroundDark};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  padding: calc(${(props) => props.theme.spaceUnit} * 2);
  height: 100%;
  max-width: 20rem;
  transition: all 0.3s ease-in-out;
  :hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const StyledAside = styled(Aside)`
  background: ${(props) => props.theme.colors.backgroundDark};
  margin-bottom: calc(${(props) => props.theme.spaceUnit} * 2);
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export default function UserCard({ user, ...props }) {
  return (
    <>
      <StyledArticle {...props} className="UserCard" id={`user-${user.id}`}>
        <StyledAside>
          <Avatar image={user.avatar} alt={userFormat(user)} loading="lazy" />
        </StyledAside>
        <StyledHeader>
          <H2 styledAs={3} noMargins>
            {userFormat(user)}
          </H2>
        </StyledHeader>
      </StyledArticle>
      <Script>{client}</Script>
    </>
  );
}
