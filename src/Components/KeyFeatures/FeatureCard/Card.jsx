import React from 'react'
import '../../../App.css'

const Card = ({ image, head, description }) => {
    return (
        <div className=' hover:border-2 hover:rounded-3xl hover:border-[#E8E8E9] w-full flex justify-start items-center extrasmallmid:h-[110px] minsm:h-[90px] h-[150px] xl:h-[164px] p-2 gap-[24px] flex-shrink-0'>
            <img src={image} alt="" className='extrasmallmid:size-14 minsm:size-12
            ' />
            <div className="conten flex flex-col extrasmallmid:gap-[4px] gap-[8px]">
                <h4 className=' font-[circularStd] leading-[120%] tracking-[0%] text-[23px] 2xl:text-[32px] 3xl:text-[38px] text-[#191825] 
                extrasmallmid:text-[18px] minsm:text-[14px]
                '>{head}</h4>
                <p className='text-[#19182580] leading-[160%] font-[interFont] text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-normal
                
                extrasmallmid:text-[14px]
                minsm:text-[12px]
                '>{description}</p>
            </div>
        </div>
    )
}

export default Card