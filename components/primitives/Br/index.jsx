import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <br ref={ref} {...props} />;
});
