import React, { useState } from 'react';

const AudioCall = (props) => {
    console.log(props.callerInfo)
    return (
        <div className='cursor-pointer gap-3 p-3 items-center backdrop-blur-sm rounded-b-xl absolute z-10  top-0 left-1/2 transform -translate-x-1/2  shadow-xl justify-between w-[calc(100vw-30px)] md:w-[calc(40%-100px)] md:min-w-[400px] h-[calc(100vh-200px)] flex flex-col duration-300 py-20'>
            <div>
                <img className='rounded' src={props.callerInfo.avatar} alt="" />
            </div>
        </div>
    );
};

export default AudioCall;