import React from "react";
import client from "../src/js/info.mjs";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Strong from "../components/primitives/Strong";
import A from "../components/primitives/A";
import Button from "../components/primitives/Button";
import P from "../components/primitives/P";
import Br from "../components/primitives/Br";
import Accordion from "../components/ui/Accordion";
import VerticalSpace from "../components/ui/VerticalSpace";
import Script from "../components/ui/Script";

/**
 * custom data for this template (Like front matter)
 */
export const data = {
  name: "John Doe",
  pageTitle: "Test drive",
  description: "Some test of eleventy’s features",
  accordion: [
    {
      title: "Title number 1",
      description: "Description number 1",
    },
    {
      title: "Title number 2",
      description: "Description number 2",
    },
    {
      title: "Title number 3",
      description: "Description number 3",
    },
  ],
};

export default function Info({
  site,
  name,
  pageTitle,
  description,
  accordion,
}) {
  const { title } = site;
  return (
    <DefaultLayout
      head={<Head title={pageTitle} slogan={title} description={description} />}
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
        <A href="/blog">
          This page show posts written <Br />
          in markdown format
        </A>
      </P>
      <P center>
        <A href="/storybook">Here you can look at storybook</A>
      </P>
      <P center>
        This name is from custom template data: <Strong>{name}</Strong>
      </P>
      <VerticalSpace size={2} />
      <P center>
        This is a vanilla js powered accordion <Br />
        that uses a{" "}
        <A href="https://github.com/signalkuppe/fisarmonica" rel="noopener">
          library
        </A>{" "}
        installed in node_modules
      </P>
      <VerticalSpace size={2} />
      <Accordion items={accordion} />
      <VerticalSpace size={4} />
      <Script>{client}</Script>
    </DefaultLayout>
  );
}
