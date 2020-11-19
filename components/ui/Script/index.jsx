import React from "react";
import { omit, values } from "lodash";
import config from "../../../react/config";

export const outputLibDir = config.outputLibDir;

export default function Script({ libs, children }) {
  const cssLibsString = libs?.map((lib) => values(omit(lib, "js")));
  const jsLibsString = libs?.map((lib) => values(omit(lib, "css")));
  return (
    <div
      className="script"
      data-js-libs={jsLibsString?.length ? jsLibsString : ""}
      data-css-libs={cssLibsString?.length ? cssLibsString : ""}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
