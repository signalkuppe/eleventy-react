import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <li ref={ref} {...props} />;
});
