import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <a ref={ref} {...props} />;
});
