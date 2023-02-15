import React from 'react';
import server_error from './server_error.png'

const Error = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <img src={server_error} alt="server_error" className="w-[300px]"/>
        </div>
    );
};

export default Error;