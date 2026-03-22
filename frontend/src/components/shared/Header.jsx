import React from 'react';
import mainLogo from "../../assets/main-icon.png";
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <div className='w-full text-sm bg-white'>
            {/* top navbar */}
            <div className='px-4 md:px-8'>
                <div className='max-w-screen-xl mx-auto flex justify-between items-center py-3'>
                    {/* left part */}
                    <div className='flex items-center space-x-4'>
                        <img src={mainLogo} alt="logo" className='h-8 object-contain cursor-pointer' />
                    
                    <div className="relative">
                        <input type="text" placeholder="Search for Movies, Events, Plays, Sports and more..." className=" border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none bg-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                    </div>
                    {/* right part */}
                    <div className="flex items-center space-x-6">
                        <div className="text-sm font-medium cursor-pointer ">
                            West Bengal &nbsp;▼
                        </div>
                        <button className="px-4 py-1.5 rounded bg-red-500 cursor-pointer text-sm font-medium text-white hover:bg-red-600">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
            {/* bottom navbar */}
            <div className='bg-[#f2f2f2] px-4 md:px-8'>
                <div className='max-w-screen-xl mx-auto flex justify-between items-center py-2 text-graay-700'>
                    <div className='flex items-center space-x-6 font-medium'>
                        <span className='cursor-pointer hover:text-red-500'>Movies</span>
                         <span className='cursor-pointer hover:text-red-500'>Streams</span>
                        <span className='cursor-pointer hover:text-red-500'>Events</span>
                        <span className='cursor-pointer hover:text-red-500'>Plays</span>
                        <span className='cursor-pointer hover:text-red-500'>Sports</span>
                          <span className='cursor-pointer hover:text-red-500'>Activities</span>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                        <span className='cursor-pointer hover:underline'>ListYourShow</span>
                        <span className='cursor-pointer hover:underline'>Corporates</span>
                          <span className='cursor-pointer hover:underline'>Offers</span>
                        <span className='cursor-pointer hover:underline'>Gift Cards</span>
                    </div>
                </div>
            
            </div>
        </div>
    )
}
export default Header;