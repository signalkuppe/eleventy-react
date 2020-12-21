import React from 'react';

export default React.forwardRef(({ ...props }, ref) => {
    return <dt ref={ref} {...props} />;
});
