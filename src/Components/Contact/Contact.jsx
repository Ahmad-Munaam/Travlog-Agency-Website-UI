import React from 'react'
import vector from '../../assets/Images/Contact/Graphic_Elements.png'
import message from '../../assets/Images/Contact/message 1.png'

const Contact = () => {
    return (
        <section className="w-[85%] relative flex flex-col justify-center bg-[#FFF8ED] rounded-2xl py-[62px] md:py-[86px] lg:py-[110px] px-6 sm:px-12  mx-auto overflow-hidden gap-[38px] md:gap-[62px] overflow-x-hidden">

            <div className="one flex flex-col gap-[12px] md:gap-[18px] lg:gap-[28px] xl:gap-[48px]">

                <p className="text-center text-[10px]  md:text-sm tracking-[0.1rem] sm:tracking-[0.2rem] text-[#F85E9F] font-[circularStd] leading-[80%] sm:leading-[120%] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] 3xl:text-[32px]">
                    SUBSCRIBE TO OUR NEWSLETTER
                </p>

                <h2 className="text-center text-[20px] sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[62px] 2xl:text-[72px] text-[#191825]  leading-[120%] lg:leading-[100%] font-[circularStd] flex flex-col lg:gap-[0px] xl:gap-[18px] 2xl:gap-[28px] font-semibold minsm:text-[16px]">

                    <span>Prepare yourself & let's explore the </span>
                    <span> beauty of the world </span>
                </h2>
            </div>

            <div className=" flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[32px]">
                <div className="flex items-center  w-full sm:w-[80%] md:w-[60%] lg:w-[60%] xl:w-[70%] bg-white rounded-2xl lg:rounded-3xl px-4 py-3 md:py-[20px] lg:py-[24px] xl:py-[32px] minsm:py-[12px]">
                    <span className="text-[#191825BF] mr-2">
                        <img src={message} alt="" className=' size-7 lg:size-9 minsm:size-7' />
                        </span>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="outline-none w-full text-[#191825BF] font-[circularStd] leading-[120%] tracking-[0%] text-[16px] md:text-[18px] lg:text-[24px]  minsm:text-[14px]"
                    />
                </div>

                <button className="bg-[#5D50C6] hover:bg-purple-700 transition text-[#FFFFFF] font-medium minsm:px-8 minsm:py-4 px-7 py-5 sm:px-4  sm:py-4 md:px-6 md:py-5 lg:px-11 lg:py-7 xl:py-8 rounded-[18px] lg:rounded-[28px] shadow-md font-[circularStd] leading-[120%] tracking-[0%] lg:text-[18px] text-[14px] md:text-[16px]">
                    Subscribe
                </button>
            </div>
        </section>
    )
}

export default Contact