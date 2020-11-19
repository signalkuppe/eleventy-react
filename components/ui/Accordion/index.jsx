import React, { Fragment } from "react";
import Dl from "../../primitives/Dl";
import Dt from "../../primitives/Dt";
import Dd from "../../primitives/Dd";
import Button from "../../primitives/Button";
import Script, { outputLibDir } from "../Script";
import client from "./client.mjs";

export default function Accordion({ items }) {
  return (
    <>
      <Dl reset id="accordion">
        {items.map((item, i) => (
          <Fragment key={i}>
            <Dt>
              <Button>{item.title}</Button>
            </Dt>
            <Dd>{item.description}</Dd>
          </Fragment>
        ))}
      </Dl>
      <Script
        libs={[
          {
            js: `/${outputLibDir}/fisarmonica/src/fisarmonica.js`,
            css: `/${outputLibDir}/fisarmonica/src/fisarmonica.css`,
          },
        ]}
      >
        {client}
      </Script>
    </>
  );
}
