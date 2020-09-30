import React from "react";
import styled from "styled-components";
import Article from "../../../../primitives/Article";
import Aside from "../../../../primitives/Aside";
import Header from "../../../../primitives/Header";
import Img from "../../../../primitives/Img";
import H2 from "../../../../primitives/H2";

const StyledArticle = styled(Article)`
  background: ${(props) => props.theme.colors.backgroundDark};
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  height: 100%;
  max-width: 20rem;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-1%);
  }
`;

const StyledAside = styled(Aside)`
  background: ${(props) => props.theme.colors.backgroundDark};
  display: flex;
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: calc(${(props) => props.theme.spaceUnit} * 2);
`;

export default function PostCard({ post, ...props }) {
  return (
    <StyledArticle {...props}>
      <StyledAside>
        <Img
          src={post.cover}
          alt={post.title}
          responsive
          width="1280px"
          height="853px"
          loading="lazy"
        />
      </StyledAside>
      <StyledHeader>
        <H2 styledAs={3}>{post.title}</H2>
      </StyledHeader>
    </StyledArticle>
  );
}
