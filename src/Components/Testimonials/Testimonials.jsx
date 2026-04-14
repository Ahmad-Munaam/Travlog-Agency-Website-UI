import React, { useState } from 'react'
import profileImage from '../../assets/Images/Testimonials/Ellipse 22.png'
import stars from '../../assets/Images/Testimonials/Frame 54.png'
import vector from '../../assets/Images/Testimonials/Layer_1.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
const Testimonials = () => {
    const [testi, setTesti] = useState(0)

    const testimonialsData = [
        {
            name: "Mark Smith",
            role: "Travel Enthusiast",
            feedback: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in classical Latin literature."
        },
        {
            name: "Sonia Carter",
            role: "Adventure Blogger",
            feedback: "This platform completely changed the way I plan my trips. Excellent and trustworthy services!"
        }
    ];

    return (

        <div className='w-[85%] mx-auto flex flex-col items-center gap-[48px] relative'>
            <div className="flex flex-col items-center gap-[12px]">
                <h2 className=' text-[#F85E9F] font-[CircularStd] leading-[120%] tracking-[0.3rem] text-[18px] sm:text-[23px] font-bold  2xl:text-[32px] 3xl:text-[34px]'>
                    TESTIMONIALS
                </h2>
                <h3 className='text-[#191825] font-[circularStd] text-[32px] sm:text-[44px] font-bold leading-[120%] tracking-[0%] 2xl:text-[52px] 3xl:text-[56px]'>Trust our clients</h3>
            </div>
            <div className=' flex flex-col gap-0 items-center w-full'>

                <img src={profileImage} alt="" className=' z-10 xl:size-auto size-[62px] sm:size-[78px] md:size-[98px]' />
                <div className=' w-full flex justify-between'>

                    <button className='w-[56px] h-[56px] md:w-[76px] md:h-[76px] 2xl:h-[86px] 2xl:w-[86px] 3xl:w-[98px] 3xl:h-[98px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 bg-white text-black hover:bg-[#5d50C6] hover:text-white' onClick={() => {
                        if (testi > 0) {
                            setTesti(testi - 1)
                            // console.log(testi)
                        }
                    }}>
                        <FaArrowLeft />
                    </button>
                    <button className='w-[56px] h-[56px] md:w-[76px] md:h-[76px] 2xl:h-[86px] 2xl:w-[86px] 3xl:w-[98px] 3xl:h-[98px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 bg-white text-black hover:bg-[#5d50C6] hover:text-white' onClick={() => {
                        if (testi < testimonialsData.length - 1) {
                            setTesti(testi + 1)
                            // console.log(testi)
                        }
                    }}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <div className='flex flex-col gap-[16px] md:gap-[32px] items-center'>
                <h3 className='text-[16px] sm:text-[28px] font-[circularStd] font-bold leading-[120%] tracking-[0%] text-center h-[40px] sm:h-[50px] flex items-center justify-center'>
                    <span className='text-[#FF5722] 2xl:text-[34px] 3xl:text-[38px]'>{testimonialsData[testi].name}</span>
                    <span className='text-[#53525C] 2xl:text-[34px] 3xl:text-[38px]'> / {testimonialsData[testi].role}</span>
                </h3>
                <div>
                    <img src={stars} alt="" />
                </div>
                {
                    testimonialsData.map((value, index) => {
                        return <p key={index}
                            className={`text-[#191825BF] text-[12px] md:text-[18px] lg:text-[23px] 2xl:text-[32px] 3xl:text-[34px] leading-[160%] tracking-[0%] font-[450] w-[80%] minsm:text-[12px] sm:w-[80%] md:w-[75%] lg:w-[65%] text-center ${index === testi ? `block` : `hidden`}`}   >{value.feedback}</p>

                    })
                }
                {/* <p className='text-[#191825BF] text-[12px] md:text-[18px] lg:text-[23px] leading-[160%] tracking-[0%] font-[450] w-[80%] minsm:text-[12px] sm:w-[80%] md:w-[75%] lg:w-[65%] text-center'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p> */}
            </div>



            <div className=' flex justify-center items-center gap-[18px] mt-[12px]'>
                {
                    testimonialsData.map((value, index) => {
                        return <span className={`${testi === index ? `bg-[#F85E9F] ` : `bg-[#F3F3F4]`} w-[24px] h-[24px] bg-[#F3F3F4] rounded-full`}></span>

                    })
                }
            </div>

        </div>


    )
}

export default Testimonials