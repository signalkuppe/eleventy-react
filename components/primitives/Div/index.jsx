import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});
