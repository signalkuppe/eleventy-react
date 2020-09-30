import React from "react";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Scripts from "../components/layout/Scripts";
import Span from "../components/primitives/Span";
import A from "../components/primitives/A";
import Button from "../components/primitives/Button";
import P from "../components/primitives/P";

/**
 * custom data for this template (Like front matter)
 */
export const data = {
  name: "John Doe",
  pageTitle: "Test drive",
  description: "Some test of eleventy’s features",
};

export default function Info({ site, name, pageTitle, description }) {
  const { title } = site;
  return (
    <DefaultLayout
      head={<Head title={pageTitle} slogan={title} description={description} />}
      scripts={<Scripts scripts={["/js/info.js"]}></Scripts>}
      title={pageTitle}
      active="/info/"
    >
      <P center>
        <Button primary id="test-button">
          Click to trigger some client side js
        </Button>
      </P>
      <P center>
        <A href="/users">This page grabs data from an api</A>
      </P>
      <P center>
        <A href="/blog">This page show posts written in markdown format</A>
      </P>
      <P center>
        <A href="/storybook">Here you can look at storybook</A>
      </P>
      <P center>
        This name is from custom template data: <Span bold>{name}</Span>
      </P>
    </DefaultLayout>
  );
}
