import React from 'react'
import star from '../../../assets/Images/dESTINATION/Cards/Vector.png'
import '../../../App.css'
const Card = ({ image, title, price, location, rating }) => {
    return (
        <div className='z-50 h-[320px] md:h-[420px] lg:h-[480px] xl:h-[520px] m-1 minsm:w-[60%] w-[50%] sm:w-[40%] md:w-[37%] mdxl:w-[33%] lg:w-[31%] xl:w-[30%] flex-shrink-0 flex flex-col gap-[5%] bg-[#FFFFFF] border-none  rounded-[28px] shadow-2xl mb-[12px] md:mb-[94px] destinationCard'>
            <img src={image} alt="" className=' h-[60%] lg:h-[62%] xl:h-[60%] w-full' />
            <div className=" flex-1 flex justify-center items-start my-auto">
                <div className="main w-[85%] h-[85%] flex justify-between items-start 2xl:gap-0 gap-3 xl:gap-2">
                    <div className="OneColumn flex flex-col w-[90%] sm:w-[80%] mdxl:w-[70%] lg:w-[80%] xl:w-[65%] 2xl:w-[55%] justify-between h-full">
                        <div className="title font-[circularStd] font-medium text-[12px] sm:text-[14px] md:text-[16px] mdxl:text-[16px] lg:text-[20px] xl:text-[23px] leading-[120%] tracking-[0%] text-[#191825]">{title}</div>
                        <div className="location font-[interFont] text-[10px] sm:text-[12px] mdxl:text-[14px] lg:text-[16px] xl:text-[18px] leading-[160%] tracking-[0%] text-[#191825BF]">{location}</div>
                        <div className="ratings flex w-full justify-start items-center text-[12px] sm:text-[16px] md:text-[20px] lg:text-[23px] font-[circularStd] text-[#FF5722] leading-[120%] tracking-[0%] gap-[8px]">
                            {rating}
                            <img src={star} alt="" className='xl:size-auto size-2 sm:size-3 md:size-4' />
                        </div>
                    </div>
                    <div className="2ndColumn text-[#F85E9F] text-[12px] sm:text-[16px] xl:text-[23px] 2xl:text-[28px] font-[circularStd] leading-[120%] ">{price}</div>
                </div>
            </div>


        </div>
    )
}
export default Card