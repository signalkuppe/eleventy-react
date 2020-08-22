import React from "react";

export default React.forwardRef(({ level, ...props }, ref) => {
  const Tag = `h${level || 1}`;
  return <Tag ref={ref} {...props} />;
});
