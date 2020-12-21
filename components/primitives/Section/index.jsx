import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <section ref={ref} {...props} />;
});
