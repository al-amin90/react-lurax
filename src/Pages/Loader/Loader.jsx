import React from 'react';
import { GridLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex justify-center items-center w-full min-h-[calc(100vh-96px)]'>
            <GridLoader
                color="#36d7b7"
                size={20}
            />
        </div>

    );
};

export default Loader;