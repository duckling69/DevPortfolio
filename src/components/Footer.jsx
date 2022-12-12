import React from 'react';
import { FaInstagram } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai';
function Footer() {
    return (
        <section id='Contact'>
            <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
                <a href="#" className="block text-xl md:text-2xl font-semibold">
                    Vivek Jha
                </a>
                <a href="mailto:vivekjha3080@gmail.com" className="text-sm md:text-md hover:text-indigo-500">
                    vivekjha3080@gmail.com
                </a>
                <div className='trans text-gray-300  text-center m-auto flex flex-row gap-2  w-[100px] h-[25px] mb-3 mt-4'>
                    <a href="https://www.instagram.com/duckling._.69/"><FaInstagram className='w-full h-full  cursor-pointer' /></a>
                    <a href="https://github.com/duckling69"><AiFillGithub className='w-full h-full cursor-pointer  ' ></AiFillGithub></a>
                    <a href="https://www.linkedin.com/in/vivek-jha-17000918b"><AiOutlineLinkedin className='w-full h-full cursor-pointer' ></AiOutlineLinkedin></a>
                </div>
            </div></section>
    );
}

export default Footer;