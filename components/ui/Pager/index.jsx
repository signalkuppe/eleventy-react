import React from "react";
import styled from "styled-components";
import Nav from "../../primitives/Nav";
import Ul from "../../primitives/Ul";
import Li from "../../primitives/Li";
import A from "../../primitives/A";

const StyledUl = styled(Ul)`
  display: flex;
  justify-content: center;
`;

export default function Pager({ pagination, ...props }) {
  const { previousPageLink, nextPageLink } = pagination;
  if (!previousPageLink && !nextPageLink) {
    return null;
  } else {
    return (
      <Nav {...props}>
        <StyledUl reset inline>
          {previousPageLink && (
            <Li>
              <A href={previousPageLink} title="Previous page">
                &laquo; Previous page
              </A>
            </Li>
          )}
          {nextPageLink && (
            <Li>
              <A href={nextPageLink} title="Next page">
                Next page &raquo;
              </A>
            </Li>
          )}
        </StyledUl>
      </Nav>
    );
  }
}
