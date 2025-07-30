import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


export default function modal() {
    return (
        <div className='fixed backdrop-blur-lg bg-primary/5 w-full h-full top-0 left-0'>
            <div className='absolute bg-modal-color top-[50%] left-[50%]  -translate-x-1/2 -translate-y-1/2 w-1/2 h-2/3 rounded-xl p-4 '>
                <div className=' flex items-center justify-between gap-3'>
                   <div className='flex gap-2 items-center'>
                     <IoSearchSharp style={{color:"#A1A7BB"}}/>
                    <input className='placeholder:text-darktext placeholder:text-xm focus:outline-none focus:ring-0 text-sm text-text-input' type="text" placeholder='Search coin' />
                   </div>
                    <IoMdClose style={{color:"#A1A7BB"}}/>
                </div>
                <div className='border-amber-300 '>
                    {/* data.. */}
                </div>
            </div>

        </div>
    )
}

