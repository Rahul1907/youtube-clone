import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsYoutube } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'

import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-14 h-14 bg-[#212121] sticky top-0 z-50'>
            <div className="flex items-center text-2x1">
                <div className='gap-2'>
                    <GiHamburgerMenu />
                </div>
                <Link to='/' >
                    <div className="flex gap-1 items-center justify-content">
                        <BsYoutube className='text-3x1 text-red-600' />
                        <span className='text-x1 font-medium'> Youtube </span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form action="">
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className='text-x1' />
                            </div>
                            <input type="text" className='w-96 bg-zinc-900 focus:outline-none border-none' />
                            {/* <AiOutlineClose className='h-10 w-16 flex items-center justify-center bg-zinc-800' /> */}
                            <AiOutlineClose className='text-x1 cursor-pointer' />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800'>
                            <AiOutlineSearch className='text-x1' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Navbar