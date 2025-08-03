import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

export default function Modal({ closeModal, coin }) {
    const [search, setSearch] = useState("");

    const searchcoin = coin.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='fixed backdrop-blur-lg bg-primary/5 w-full h-full top-0 left-0'>
            <div className='absolute bg-modal-color top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full h-full xl:w-1/2 xl:h-2/3 xl:rounded-xl p-4'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='flex gap-2 items-center'>
                        <IoSearchSharp style={{ color: "#A1A7BB" }} />
                        <input
                            className='placeholder:text-darktext placeholder:text-xm focus:outline-none focus:ring-0 text-sm text-text-input'
                            type="text"
                            placeholder='Search coin'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <IoMdClose onClick={closeModal} style={{ color: "#A1A7BB", cursor: "pointer" }} />
                </div>
                <div className="mt-4 overflow-y-auto max-h-11/12 scrollbar-thin scrollbar-thumb-gray-500 custom-scrollbar pt-3">
                    <ul>
                        {search && searchcoin.map(item => (
                            <li key={item.id} className="mb-2 text-white mx-3 cursor-pointer *:hover:bg-bHover *:hover:outline *:hover:outline-outline-hover">

                                <div className='bg-box py-3 px-3 rounded-md grid grid-cols-2 grid-rows-1 gap-1'>
                                    <div className='flex gap-3 items-center'>
                                        <img src={item.image} alt="" className='w-6 h-6' />
                                        <div className='flex flex-col  *:font-medium'>
                                            <span className='text-sm'>{item.name}</span>
                                            <span className='text-text-input text-xs'>{item.symbol.toUpperCase()}</span>
                                        </div>
                                    </div>

                                    <div className='flex flex-col **:text-xs **:font-medium'>
                                        <div>
                                            <span className='text-text-input' >MCap:</span>
                                            <span className='pl-0.5'>${item.market_cap.toLocaleString('en-US')}</span>
                                        </div>
                                        <div>
                                            <span className='text-text-input'>Vol(24):</span>
                                            <span className='pl-0.5'>{item.price_change_percentage_24h?.toFixed(2)}%</span>
                                        </div>
                                    </div>

                                    {/* <div className='flex flex-col **:text-xs **:font-medium'>
                                        <div>
                                            <span className='text-text-input' >MCap:</span>
                                            <span className='pl-0.5'>${item.market_cap.toLocaleString('en-US')}</span>
                                        </div>
                                       <div>
                                            <span className='text-text-input'>Vol(24):</span>
                                            <span className='pl-0.5'>{item.price_change_percentage_24h?.toFixed(2)}%</span>
                                        </div>
                                    </div> */}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
