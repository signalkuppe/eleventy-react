import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <aside ref={ref} {...props} />;
});
