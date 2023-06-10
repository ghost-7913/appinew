import React from 'react';

const MainContent = ({children}) => {
    return (
        <div className='userDashboard-Main-Content'>
                {
                    children
                }
        </div>
    );
};

export default MainContent;