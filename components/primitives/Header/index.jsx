import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <header ref={ref} {...props} />;
});
