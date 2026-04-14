import React from 'react'
import logo from '../../assets/Images/header/Vector.png'
import icon from '../../assets/Images/Footer/Group 8.png'
import fb from '../../assets/Images/Footer/fb.png'
import twitter from '../../assets/Images/Footer/twitter.png'
import '../../App.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='w-[85%] flex flex-col items-center gap-[32px] lg:flex-row lg:items-start lg:justify-between lg:gap-[153px]'>
            <div className="one w-full lg:w-[20%] flex flex-col items-center lg:items-start gap-[32px] lg:gap-[38px]">
                <div className="flex flex-col items-center lg:items-start gap-[32px]">
                    <div className=' flex justify-center items-center gap-2'>
                        <img src={logo} alt="logo" />
                        <span className=' text-[#191825] text-[21px] lg:text-[24px] font-[circularStd] font-black leading-[40%] tracking-[0%]  3xl:text-[32px]'>Travlog</span>
                    </div>
                    <p className='text-[#19182580] font-[circularStd] font-[450] leading-[160%] tracking-[0%] text-[14px] xl:text-[18px] 2xl:text-[20px] text-center lg:text-left lg:w-auto w-[75%] 3xl:text-[22px]'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>
                <div className="socialIcons flex items-center gap-[32px]">
                    <img src={fb} alt="" className=' 3xl:size-10' />
                    <img src={twitter} alt="" className=' 3xl:size-10' />
                    <img src={icon} alt="" className=' 3xl:size-10' />
                </div>
            </div>
            <div className="two w-full grid grid-cols-1 sm:grid-cols-2 gap-[24px] lg:flex-1 lg:h-full lg:grid md:grid-cols-3 lg:gap-[24px] lg:ml-auto">
                <div className="oneGrid flex flex-col gap-[32px] items-center lg:items-start">
                    <h3 className='text-[#191825] font-[circularStd] text-[23px] font-bold leading-[120%] tracking-[0%] 3xl:text-[32px]'>Company</h3>
                    <ul className=' flex flex-col gap-[12px] xl:gap-[14px] 2xl:gap-[18px] items-center lg:items-start'>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0]  3xl:text-[24px]'>
                            <a href="#"> About us </a>

                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px] '>
                            <a href="#"> Career</a>
                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            <a href="#"> Mobile</a>
                        </li>
                    </ul>
                </div>

                <div className="twoGrid flex flex-col gap-[32px] items-center lg:items-start">
                    <h3 className='text-[#191825] font-[circularStd] text-[23px] font-bold leading-[120%] tracking-[0%]  3xl:text-[32px]'>Contact</h3>
                    <ul className=' flex flex-col gap-[12px] xl:gap-[14px] 2xl:gap-[18px] items-center lg:items-start'>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            Why Travlog ?
                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            Partner with us

                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            FAQ's
                        </li>

                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            <a href="#"> Blog  </a>
                        </li>
                    </ul>
                </div>

                <div className="threeGrid flex flex-col gap-[32px] items-center lg:items-start">
                    <h3 className='text-[#191825] font-[circularStd] text-[23px] font-bold leading-[120%] tracking-[0%]'>Meet Us</h3>
                    <ul className=' flex flex-col gap-[12px] xl:gap-[14px] 2xl:gap-[18px] items-center lg:items-start  3xl:text-[32px]'>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            <a href="https://wa.me/92123456789
"
                                target='_blank'>+00 92 1234 56789 </a>

                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px] 2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            <a href="mailto:info@travlog.com" target='_blank'>info@travlog.com</a>
                            
                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px]  2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            <a href="https://www.google.com/maps?q=205. R Street, New York" target='_blank'>
                            205. R Street, New York
                            </a>
                        </li>
                        <li className='text-[#191825BF] leading-[160%] xl:text-[16px] text-[14px]  2xl:text-[18px] font-[interFont] font-normal tracking-[0] 3xl:text-[24px]'>
                            BD23200
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer