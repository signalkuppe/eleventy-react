import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <figure ref={ref} {...props} />;
});
