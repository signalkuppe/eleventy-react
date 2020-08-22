import React from "react";

export default React.forwardRef(({ primary, outline, ...props }, ref) => {
  return <button ref={ref} {...props} />;
});
