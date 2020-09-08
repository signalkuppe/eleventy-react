# eleventy-react

> Use [React](https://reactjs.org/) components in [Eleventy](https://www.11ty.dev/).

## Demo

[https://eleventy-react.netlify.app/](https://eleventy-react.netlify.app/)

## Why

Eleventy is a great static site generator, but I don’t like template engines.
They introduce a lot of custom syntax, and it’s almost impossibile to convert them to a component-based dev flow.

## Installation

### 1. Clone or download the repository

```shell
git clone git@github.com:signalkuppe/eleventy-react.git eleventy-react
```

### 2. Go to the working directory

```shell
cd eleventy-react
```

### 3. Install the project dependencies

```shell
npm install

```

### 3. Run development mode

```shell
npm run dev
```

Build you site for deploy

```shell
npm run build
```

## Features

### Integration with data file and custom template data

just add a `data export` to your jsx file

```js
import React from "react";

// custom template data
export const data = {
  name: "John Doe",
};

export default function Index({ site, name }) {
  // site comes from site.js data file in _data
  const { title } = site;

  return (
    <DefaultLayout>
      <Heading>{title}</Heading>
      <Paragraph>
        This name is from custom template data: <Text bold>{name}</Text>
      </Paragraph>
    </DefaultLayout>
  );
}
```

### Support for pagination: you can generate pages from data

```js
import React from "react";
import { slug } from "./utils/user";
import DefaultLayout from "../components/layout/Default";
import Heading from "../components/ui/Heading";

/**
 * A template that renders a page for each user in the users collection
 */

export const data = {
  pagination: {
    data: "users",
    size: 1,
    alias: "user",
  },
  permalink: function (data) {
    return slug(data.user);
  },
};

export default function User({ site, user }) {
  return (
    <DefaultLayout>
      <Heading>{user.name}</Heading>
    </DefaultLayout>
  );
}
```

### Integration with styled components

styles are extracted and inserted into the `<head>` tag

```js
import React from "react";
import styled from "styled-components";
import PrimitiveText from "../../primitives/Text";

const StyledText = styled(PrimitiveText)`
  font-weight: ${(props) => {
    if (props.bold) {
      return 700;
    } else {
      return 400;
    }
  }};
`;

export default function Text({ children, ...props }) {
  return <StyledText {...props}>{children}</StyledText>;
}
```

### Integration with [storybook](https://storybook.js.org/)

Develop your UI in isolation adding stories for your components and run storybook with

```shell
npm run storybook
```

Build storybook inside eleventy’s \_site folder

```shell
npm run build-storybook
```

stories are written in [.mdx](https://storybook.js.org/docs/react/writing-docs/mdx) format

### Some basic scaffolding included

basic ui/primitives/features components included to give an idea of the approach

### Inline svg parser included

import and use inline svgs in your react components

## Notes

React is not included in the build, so you can use any js approach on the client
I think that adding hydration would go against Eleventy’s philosophy

## TODO

- reduce storybook bundle site for production build
- test other eleventy’s features (markdown content with layout)
- use React components in \_data files
- use React components for primitives in markdown parser

## Warnings

_⚠️ very much a work in progress_

Requires experimental features in Eleventy, specifically: [Custom File Extension Handlers feature from Eleventy](https://github.com/11ty/eleventy/issues/117)
