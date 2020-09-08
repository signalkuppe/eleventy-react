import React from "react";

export default function Post({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
