import React from 'react';
import mainLogo from "../../assets/main-icon.png";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "../../context/LocationContext";
import map from "../../assets/pin.gif";

const Header = () => {
    const { location, loading, error } = useLocation();

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
                            <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                        </div>
                    </div>
                    {/* right part */}
                    <div className="flex items-center space-x-6">
                        <div className="text-sm font-medium cursor-pointer ">
                            {/* {
                                if(location){
                                    {<p>{location}&nbsp;▼</p>}
                                }else{{<img src={map} alt="loading..." className='w-10 h-10 ' />}}
                            } */}
                            {!location && (
                                <img src={map} alt="loading..." className="w-8 h-8" />
                            )}

                            {location && (
                                <p>{location}&nbsp;▼</p>
                            )}
                        </div>
                        <button className="px-4 py-1.5 rounded bg-red-500 cursor-pointer text-sm font-medium text-white hover:bg-red-600">
                            Sign in
                        </button>
                        <div>
                            <svg className='cursor-pointer'width="24px" height="24px" viewBox="0 0 12.00 12.00" enable-background="new 0 0 12 12" id="Слой_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" stroke="#000000" stroke-width="0.00012000000000000002"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.12000000000000002"></g><g id="SVGRepo_iconCarrier"> <g> <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="5.5"></rect> <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="2.5"></rect> <rect fill="#1D1D1B" height="1" width="11" x="0.5" y="8.5"></rect> </g> </g></svg>
                        </div>
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