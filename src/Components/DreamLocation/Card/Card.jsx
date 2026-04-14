import React from 'react'

const Card = ({ num, description }) => {
    return (
        <div className='minsm:w-full md:w-[80%]  maxsm:w-full w-[184px] h-[110px] lg:w-full lg:m-0 md:m-2 xl:w-full md:h-[110px] lg:h-[120px] xl:h-[140px] 2xl:h-[151px]  2xl:w-[85%] flex flex-col items-center justify-center gap-[12px] border-[#E8E8E9] border-2 rounded-3xl'>
            <div className=' text-[#FF5722] font-[circularStd]  text-[26px] xl:text-[30px] 2xl:text-[35px] font-bold leading-[120%] tracking-[0%] minsm:text-[24px]'>
                {num}
            </div>
            <div className=' font-[interFont] leading-[160%] tracking-[0%] minsm:text-[16px] md:text-[14px] xl:text-[16px] 2xl:text-[18px] text-[#191825] text-center' >
                {description}
            </div>
        </div>
    )
}

export default Card