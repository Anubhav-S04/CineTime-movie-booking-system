import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTwitter, FaYoutube } from 'react-icons/fa';
import mainLogo from "../../assets/logo-icon-white.png";
const Footer = () => {
    return (
        <footer className='bg-[#2b2b2b] text-gray-400 text-sm'>
            <div className='border-t border-gray-600 w-full' />
            <div className='flex flex-col items-center py-6'>
                {/* logo */}
                <img src={mainLogo} alt="Main Logo" className='mb-4 w-28' />


                {/* Social icons */}
                <div className='flex space-x-4 mb-4'>
                    <FaFacebookF className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />
                    <FaTwitter className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />
                    <FaInstagram className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />
                    <FaYoutube className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />
                    <FaPinterestP className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />
                    <FaLinkedinIn className='w-8 h-8 p-2 rounded-full bg-gray-700 text-gray-400 text-white hover:text-gray-200 cursor-pointer' />

                </div>
                    <p className='text-center text-xs px-4 max-w-4xl'>
                        Copyright © 2024 CineTime. All rights reserved. | <span className='underline cursor-pointer'>Terms of Use</span> | <span className='underline cursor-pointer'>Privacy Policy</span>
                        <br />
                    </p>
                    <small>
                        The content and images used on this site are copyright protected and are the property of the respective owners. The usage of the content and images on this website is intended to promote the works and no copyright infringement is intended.
                    </small>

            </div>

        </footer>
    )
}
export default Footer;