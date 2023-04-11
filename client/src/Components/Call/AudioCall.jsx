import React from 'react';
import { ImCancelCircle } from 'react-icons/im';
import Timer from '../Timer/Timer';

const AudioCall = (props) => {
    console.log(props.callerInfo)
    return (
        <div className='cursor-pointer overflow-hidden rounded-b-xl absolute z-10 top-0 left-1/2 transform -translate-x-1/2  shadow-xl w-[calc(100vw-30px)] md:w-[calc(40%-100px)] md:min-w-[300px] h-[calc(100vh-200px)]'>

            <div className='relative w-full backdrop-blur-lg  h-full'>
                <img className='absolute top-0 left-0 right-0 object-cover h-full w-full opacity-20' src={props.callerInfo.avatar} alt="" />

                <div className='w-full backdrop-blur-lg  h-full'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <img className='w-16 h-16 rounded-full' src={props.callerInfo.avatar} alt="" />
                        <p className='text-center'>{props.callerInfo.name}</p>

                        <Timer />

                        {/* cancel button */}
                        <button onClick={() => props.setIsReceived(false)} className="p-2 rounded-full hover:shadow-xl text-xl bg-red-400 text-white hover:scale-110 transition-all">
                            <ImCancelCircle className="" />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AudioCall;