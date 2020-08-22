import React from "react";

export default function Scripts({ scripts, ...props }) {
  return (
    <>
      {scripts.map((script, i) => (
        <script key={i} src={script}></script>
      ))}
    </>
  );
}
