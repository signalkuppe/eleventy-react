import React from "react";
import styled, { css } from "styled-components";
import PrimitiveList from "../../primitives/List";
import PrimitiveListItem from "../../primitives/ListItem";

const StyledList = styled(PrimitiveList)`
  ${(props) =>
    props.reset &&
    css`
      list-style: none;
      padding: 0;
    `}
  ${(props) =>
    props.inline &&
    css`
      display: flex;
      > * + * {
        margin-left: 1rem;
      }
    `}
`;
const StyledListItem = styled(PrimitiveListItem)``;

export default function List({ children, ...props }) {
  return (
    <StyledList {...props}>
      {children.map((child, i) => (
        <StyledListItem key={i}>{child}</StyledListItem>
      ))}
    </StyledList>
  );
}
