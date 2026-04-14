import React from 'react'
const Card = ({ images, head, content }) => {
    return (
        <div className='mx-3 mb-[30px] minsm:w-[250px] z-10 rounded-2xl my-[12px] h-[360px] bg-white flex-shrink-0 lg:w-[280px] w-[250px] sm:w-[260px] md:w-[270px] xl:w-[280px] 2xl:w-[300px] 3xl:w-[320px] text-center p-3 flex flex-col gap-[32px] justify-center items-center 2xl:h-[380px] 3xl:h-[420px] shadow-[4px_4px_16px_rgba(0,0,0,0.08)]
'>
            <img src={images} alt="" />
            <div className="flex flex-col w-full xl:w-[90%] gap-[18px] 2xl:items-center">
                <div className='text-[#191825] text-[24px] lg:text-[28px] font-bold leading-[120%] tracking-[0%] 2xl:text-[32px] 3xl:text-[34px] font-[circularStd]'>
                    {head}
                </div>
                <div className='text-[#19182580] font-normal text-[12px] lg:text-[16px] leading-[160%] tracking-[0%] xl:w-[95%] 2xl:text-[20px] 3xl:text-[24px] font-[interFont]'>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Card