import React from 'react';

const CenteredContent = ({ children } : { children: React.ReactNode}) => {
    return <div className={
        "min-h-screen w-full max-w-[1320px] px-4 pt-8 pb-10 mx-auto md:px-4 md:pt-4 md:pb-10"}>
        { children }
    </div>
}

export default CenteredContent;
