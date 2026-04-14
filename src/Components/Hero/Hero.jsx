import React from 'react'
import workBag from '../../assets/Images/Hero/work 1.png'
import videoIcon from '../../assets/Images/Hero/Vector.png'
import map from '../../assets/Images/Hero/layer.png'
import rec1 from '../../assets/Images/Hero/Rectangle 1.png'
import rec2 from '../../assets/Images/Hero/Rectangle 2.png'
import rec3 from '../../assets/Images/Hero/Rectangle 3.png'
import arrow from '../../assets/Images/Hero/Vector (arrow).png'
import addUser from '../../assets/Images/Hero/add-user 1.png'
import location from '../../assets/Images/Hero/location 1.png'

const Hero = () => {
    return (
        <div className='z-[9999] md:grid flex flex-col grid-cols-[40%_60%] midXl:grid-cols-[40%_60%] xl:grid-cols-2 relative lg:gap-0 gap-[18px] md:gap-2  w-[85%] mx-auto'>
            <div className='md:order-1 order-2 flex flex-col md:w-auto w-[90%] items-center md:mt-0 mt-[24px] md:items-start justify-evenly gap-[24px] xl:gap-[32px]'>
                <div className="one h-[56px] py-2 px-[32px] bg-[#FFFFFF] rounded-3xl flex justify-center items-center text-[12px] lg:text-[14px] font-bold leading-[120%] tracking-[0%] font-[circularStd] text-[#F85E9F] shadow-lg shadow-gray-200 gap-3 2xl:text-[32px] 2xl:py-11 2xl:px-11 2xl:rounded-[34px] ">
                    <div> Explore the world! </div>
                    <div> <img src={workBag} alt="" /></div>
                </div>
                <div className="two md:text-start text-center text-[40px] lg:text-[52px] xl:text-[69px] font-bold font-[circularStd] leading-[120%] w-[88%] minsm:text-[32px] 2xl:text-[80px]">
                    <span className=' text-black'>Travel </span>
                    <span className=' text-[#F85E9F]'> top destination </span>
                    <span className=' text-black'> of the world </span>
                </div>
                <div className='three font-normal text-[14px] lg:text-[16px] text-[#19182580] xl:text-[18px] leading-[160%] tracking-[0%] font-[interFont] md:w-[95%] xl:w-[90%] midXl:w-[97%] md:text-start text-center minsm:text-[12px] 2xl:text-[24px]'>
                    We always make our customer happy by providing
                    as many choices as possible
                </div>
                <div className=' four flex justify-center items-center  gap-3'>
                    <div className=' font-bold font-[circularStd] text-[12px] lg:text-[14px] leading-[120%] text-[#EEEEEE] bg-[#5D50C6] py-2 px-[16px] lg:py-3 lg:px-[20px] text-center rounded-3xl  minsm:py-2 minsm:px-[12px] minsm:text-[12px] 2xl:rounded-[32px] 2xl:text-[24px] 2xl:px-5 2xl:py-4 cursor-pointer hover:bg-[#1f09c7]'>
                        Get started
                    </div>
                    <div className=' rounded-3xl border-[#ebe9e9] border-2 flex justify-center items-center py-2 px-[16px] lg:py-3 lg:px-[20px] gap-3 cursor-pointer minsm:py-2 minsm:px-[12px] minsm:text-[12px] minsm:gap-1 2xl:px-5 2xl:py-4 2xl:rounded-[32px] hover:bg-slate-300 hover:text-[white]'>
                        <img src={videoIcon} alt="Image" />
                        <span className='text-[12px] lg:text-[14px] leading-[120%] text-[#222831] font-[circularStd] 2xl:text-[24px] '> Watch Demo </span>
                    </div>
                </div>
            </div>
            <div className=' absolute top-[-10%] md:top-[-12%] right-[-4%] z-0 xl:w-auto md:w-[70%] '>
                <img src={map} alt="" />
            </div>
            <div className='md:order-2 md:w-auto w-[90%] mx-auto  order-1 z-10 flex  justify-center items-center gap-[32px] minsm:gap-[18px] relative '>
                <div className=' flex flex-col gap-[18px] md:gap-[24px] relative'>
                    <div className=' relative'>
                        <div className=' absolute minsm:h-[38px] minsm:w-[38px]  left-[-28px] bottom-[-24px] h-[42px] w-[42px] lg:h-[56px] lg:w-[56px] bg-[#F85E9F] flex justify-center items-center rounded-full shadow-sm shadow-gray-500'>
                            <img src={arrow} alt="" className=' minsm:size-4 size-5 lg:size-auto' />
                        </div>
                        <img src={rec1} alt="" />
                    </div>
                    <img src={rec2} alt="" />
                </div>
                <div className=' flex justify-center h-full items-center'>
                    <div className="relative">
                        <img src={rec3} alt="" className='z-0' />
                        <div className="absolute bottom-[10%] right-[-15%] md:right-[-25%] shadow-md text-[#393E46] flex justify-center items-center lg:py-4 lg:px-5  px-2 py-1 sm:px-3 sm:py-2 bg-white  sm:gap-2 rounded-3xl font-[circularStd]  font-bold text-[10px] sm:text-[14px] lg:text-[17px] leading-[120%] minsm:text-[8px]">
                            <img src={location} alt="" className=' minsm:size-5' />
                            <span>Top places</span>
                        </div>
                    </div>
                    <div className="absolute bottom-0 minsm:h-[38px] minsm:w-[38px] h-[46px] w-[46px] lg:h-[56px] lg:w-[56px] bg-[#FF5722] rounded-full flex justify-center items-center p-2">
                        <img src={addUser} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero