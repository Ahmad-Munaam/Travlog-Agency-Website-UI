import React, { useState } from 'react'
import logo from '../../assets/Images/header/Vector.png'
import { BiMenuAltRight } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import headerEllipse from '../../assets/Images/header/Ellipse 23.png'
import { Link } from 'react-router-dom';

import '../../Font.css'
const Header = () => {
    // const naviagte =useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: "smooth"
        });
        setIsOpen(false)
    };

    return (
        <div id='header' className='z-0 h-[113px] min-w-[380px] mx-auto w-full 3xl:max-w-[1700px] 3xl:mx-auto flex justify-center items-center font-[circularStd] lg:relative'>
            <nav className='hidden w-[85%] lg:flex justify-between items-center z-10 '>
                <div className=' flex justify-center items-center gap-2'>
                    <img src={logo} alt="" className='size-9 3xl:size-14 2xl:size-12' />
                    <div className=' text-[#191825]  leading-[40px] text-[18px] font-black 2xl:text-[36px] 3xl:text-[42px]'>
                        Travlog
                    </div>
                </div>
                <div className='text-[14px] 2xl:text-[18px] 3xl:text-[22px]  leading-[120%] text-[#19182580] flex gap-[64px]'>
                    <span className=' hover:text-[#222831] cursor-pointer'> <Link to={'/'}>Home</Link> </span>
                    <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("destination")}>Discover</span>
                    <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("services")}> Special-deal </span>
                    <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("contact")}>Contact </span>
                </div>
                <div className=' flex justify-center items-center gap-[24px]'>
                    <button className='text-[14px]  2xl:text-[18px] 3xl:32px font-bold  leading-[120%] text-[#222831] '> Login</button>
                    <button className=' bg-[#5D50C6] py-3 px-[22px] hover:bg-[blue] text-[#EEEEEE] text-[14px] 2xl:text-[18px] 3xl:text-[22px] leading-[120%]  rounded-3xl '> SignUp</button>
                </div>
            </nav>
            <nav className='lg:hidden flex justify-between items-center w-full px-4 md:w-[95%]'>
                <div className='flex justify-center items-center gap-2'>
                    <img src={logo} alt="" />
                    <div className='text-[#191825] leading-[40px] text-[24px] font-black'>
                        Travlog
                    </div>
                </div>
                <div onClick={() => setIsOpen(true)} className={`${isOpen ? 'hidden' : 'block'} z-[9999]`}>
                    <BiMenuAltRight className='size-8 cursor-pointer' />
                </div>
                {isOpen && (
                    <div className='fixed top-0 right-0 h-screen w-[250px] bg-white shadow-lg p-6 z-50'>
                        <div onClick={() => setIsOpen(false)} className='absolute top-4 right-4 cursor-pointer'>
                            <GiCancel className='size-6' />
                        </div>
                        <div className='mt-16 flex flex-col items-start gap-6'>
                            <div className='text-[14px] leading-[120%] text-[#19182580] flex flex-col items-start gap-[24px] w-full'>
                                <span className=' hover:text-[#222831] cursor-pointer'> <Link to={'/'}>Home</Link> </span>
                                <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("destination")}>Discover</span>
                                <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("services")}> Special-deal </span>
                                <span className=' hover:text-[#222831] cursor-pointer' onClick={() => scrollToSection("contact")}>Contact </span>
                            </div>
                            <div className='flex flex-col items-start gap-[24px] w-full'>
                                <button className='text-[14px] font-bold leading-[120%] text-[#222831]'>Login</button>
                                <button className='w-full bg-[#5D50C6] py-3 px-[22px] hover:bg-[blue] text-[#EEEEEE] text-[14px] leading-[120%] rounded-3xl'>
                                    SignUp
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Header