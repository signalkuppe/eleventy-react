import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <img ref={ref} {...props} />;
});
