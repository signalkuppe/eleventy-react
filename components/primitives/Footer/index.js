import React from "react";

export default React.forwardRef(({ ...props }, ref) => {
  return <footer ref={ref} {...props} />;
});
