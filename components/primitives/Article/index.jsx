import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <article ref={ref} {...props} />;
});
