import React from "react";

export default React.forwardRef(({ bold, left, ...props }, ref) => {
  return <span ref={ref} {...props} />;
});
