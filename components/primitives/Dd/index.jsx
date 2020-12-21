import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <dd ref={ref} {...props} />;
});
