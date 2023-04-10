import React from 'react';
import userData from '../../../Assets/UserData/UserData';
import {FiPhoneCall} from "react-icons/fi"
import {HiOutlineVideoCamera} from "react-icons/hi"

const Popup = () => {
    const isAudioCall = true
    return (
        <div className='flex gap-3 p-3 items-center w-[calc(100vw-10px)] md:w-[300px] backdrop-blur-sm h-24 rounded-b-xl absolute z-10 top-0 left-[5px] md:left-[50%] right-[50%] m-auto shadow-xl justify-between'>
            <div className="flex gap-2">
                <img className='rounded-full w-12 h-12' src={userData.friends[0].avatar} alt="" />
                <div>
                <p className='font-semibold'>{userData.friends[0].name}</p>
                <p className='font-thin'>Incoming call...</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <button 
                className='p-2 rounded-full border hover:shadow-xl border-[#696363] text-red-500 text-xl hover:bg-red-400 hover:text-white hover:scale-120 transition-all'
                >
                    <FiPhoneCall 
                        className='' 
                    />
                </button>
                <button 
                className='p-2 rounded-full border hover:shadow-xl border-[#696363] text-green-500 text-xl hover:bg-green-400 hover:text-white hover:scale-120 transition-all'
                >
                   {isAudioCall?  <FiPhoneCall/>: <HiOutlineVideoCamera/>}
                </button>
                
            </div>
        </div>
    );
};

export default Popup;