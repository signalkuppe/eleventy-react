import React from "react";

export default React.forwardRef(({ type, inline, reset, ...props }, ref) => {
  const Tag = `${type || "ul"}`;
  return <Tag ref={ref} {...props} />;
});
