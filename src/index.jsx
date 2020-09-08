import React from "react";
import styled, { keyframes } from "styled-components";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Scripts from "../components/layout/Scripts";
import Aside from "../components/primitives/Aside";
import P from "../components/primitives/P";
import A from "../components/primitives/A";
import Img from "../components/primitives/Img";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledAside = styled(Aside)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: calc(${(props) => props.theme.spaceUnit} * 4);
`;

const Logo = styled(Img)`
  height: 30vh;
  :first-child {
    width: 30vh;
    animation: ${rotate} 20s linear infinite;
  }
`;

export default function Index({ site, name }) {
  /**
   * site come from site.js data file in _data
   */

  const { title, slogan } = site;

  return (
    <DefaultLayout
      head={<Head title={title} slogan={slogan} description={slogan} />}
      title={title}
      scripts={<Scripts scripts={["/js/index.js"]}></Scripts>}
    >
      <P center>
        Use <A href="https://reactjs.org/">React</A>,{" "}
        <A href="https://styled-components.com/">Styled components</A>, and{" "}
        <A href="https://storybook.js.org/">Storybook</A> with eleventy
      </P>
      <StyledAside>
        <Logo src="/img/react.svg" alt="React logo" />
        <Logo src="/img/eleventy-logo.png" alt="Eleventy logo" />
      </StyledAside>
    </DefaultLayout>
  );
}
