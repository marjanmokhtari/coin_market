import React from 'react'
import CoinLogo from '../../assets/coinmarketcap_white_1.svg'
import SmallLogo from '../../assets/MenuCmcIconV3.svg'
import { CiMenuBurger } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";


export default function header() {
  return (
    <header className='flex justify-between items-center '>
      <img className='w-45 hidden md:block' src={CoinLogo} alt="" />
      <img className='md:hidden' src={SmallLogo} alt="" />
      <div className='flex gap-3'>
        <input className='hidden xl:block w-58 h-8 bg-coolblue text-amber-50 rounded-md placeholder:text-darktext placeholder:text-sm placeholder:p-2 hover:bg-hoverblue  focus:outline-none focus:ring-0 pl-2 text-sm' placeholder='Search' type="text" />
        <button className='hidden xl:block w-16 rounded-md bg-lightblue text-sm'>Log In</button>
        <IoSearchSharp className='xl:hidden' style={{ width: "24px", height: "24px" }} />
        <CiMenuBurger className='xl:hidden' style={{ width: "24px", height: "24px" }} />
      </div>
    </header>
  )
}
