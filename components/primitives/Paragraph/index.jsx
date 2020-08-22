import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <p ref={ref} {...props} />;
});
