import React from "react";

export default function (Component) {
  return ({ children, ...props }) => (
    <Component {...props} dangerouslySetInnerHTML={{ __html: children }} />
  );
}
