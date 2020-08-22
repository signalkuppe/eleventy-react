import React from "react";
import DefaultLayout from "../components/layout/Default";
import Head from "../components/layout/Head";
import Scripts from "../components/layout/Scripts";
import Text from "../components/ui/Text";
import Link from "../components/ui/Link";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import Paragraph from "../components/ui/Paragraph";

/**
 * custom data for this template (Like front matter)
 */
export const data = {
  name: "John Doe",
};

export default function Index({ site, name }) {
  /**
   * site come from site.js data file in _data
   */

  const { title, slogan } = site;

  return (
    <DefaultLayout
      head={<Head title={title} slogan={slogan} description={slogan} />}
      scripts={<Scripts scripts={["/js/index.js"]}></Scripts>}
    >
      <Heading>{title}</Heading>
      <Paragraph>
        Use <Link href="https://reactjs.org/">React</Link>,{" "}
        <Link href="https://styled-components.com/">Styled components</Link>,{" "}
        and <Link href="https://storybook.js.org/">Storybook</Link> with
        eleventy
      </Paragraph>
      <Paragraph>
        <Button primary id="test-button">
          Click to trigger some client side js
        </Button>
      </Paragraph>
      <Paragraph>
        <Link href="/users">This page grabs data from an api</Link>
      </Paragraph>
      <Paragraph>
        <Link href="/storybook">Here you can look at storybook</Link>
      </Paragraph>
      <Paragraph>
        This name is from custom template data: <Text bold>{name}</Text>
      </Paragraph>
    </DefaultLayout>
  );
}
