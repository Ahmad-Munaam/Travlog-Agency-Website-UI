import React, { useRef, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import '../../App.css'
import Card from './Card/Card'
import image1 from '../../assets/Images/dESTINATION/Cards/Rectangle 6.png'
import image2 from '../../assets/Images/dESTINATION/Cards/Rectangle 6 (1).png'
import image3 from '../../assets/Images/dESTINATION/Cards/Rectangle 6 (2).png'
const Destination = () => {
    const ref = useRef()
    const [active, setActive] = useState(null)
    const handleClick = (side) => {
        setActive(side)
        if (side === 'left') {
            ref.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            })
        }
        if (side === 'right') {
            ref.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            })
        }
    }
    return (
        <div className='w-full'>
            <div className="flex md:flex-row flex-col md:justify-between items-center">
                <div className='flex flex-col items-center md:items-start gap-2 sm:gap-3'>
                    <h3 className='text-[#F85E9F] font-[circularStd] text-[23px] leading-[120%] tracking-[0.3rem] minsm:text-[20px] 2xl:text-[28px] 3xl:text-[32px]'>
                        TOP DESTINATION
                    </h3>
                    <div className='text-[#191825] font-[circularStd] font-bold text-center minsm:text-[24px] text-[34px] sm:text-[44px] leading-[120%] 2xl:text-[52px] 3xl:text-[56px]'>
                        Explore the destination
                    </div>
                </div>
                <div className=' hidden md:flex items-center gap-3'>
                    <button
                        onClick={() => handleClick('left')}
                        className={`w-[62px] h-[62px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 transition-colors ${active === 'left' ? 'bg-[#5d50C6] text-white' : 'bg-white text-black'}`}>
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => handleClick('right')}
                        className={`w-[62px] h-[62px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 transition-colors ${active === 'right' ? 'bg-[#5d50C6] text-white btnShadow shadow-[#DFDFDF]' : 'bg-white text-black'
                            }`}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className="border-none bg-transparent CardSection  my-[28px] sm:my-[32px] flex gap-[12px] xl:gap-[3.2%] overflow-x-auto scrollbar-hide z-50" ref={ref}>
                <Card
                    image={image1}
                    title="Paradise Beach, Bantayan Island"
                    price="$550.16"
                    location="Rome, Italy"
                    rating="4.8"
                />
                <Card
                    image={image2}
                    title="Ocean with full of Colors"
                    price="$20.99"
                    location="Maldives"
                    rating="4.5"
                />
                <Card
                    image={image3}
                    title="Mountain View, Above the cloud"
                    price="$150.99"
                    location="United Arab Emeries "
                    rating="5.0"
                />
                <Card
                    image={image1}
                    title="Paradise Beach, Bantayan Island"
                    price="$550.16"
                    location="Rome, Italy"
                    rating="4.8"
                />
                <Card
                    image={image1}
                    title="Paradise Beach, Bantayan Island"
                    price="$550.16"
                    location="Rome, Italy"
                    rating="4.8"
                />




                <Card
                    image={image3}
                    title="Mountain View, Above the cloud"
                    price="$150.99"
                    location="United Arab Emeries "
                    rating="5.0"
                />
            </div>

            <div className=' md:hidden flex items-center gap-3 justify-center'>
                <button
                    onClick={() => handleClick('left')}
                    className={`w-[62px] h-[62px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 transition-colors ${active === 'left' ? 'bg-[#5d50C6] text-white' : 'bg-white text-black'}`}>
                    <FaArrowLeft />
                </button>
                <button
                    onClick={() => handleClick('right')}
                    className={`w-[62px] h-[62px] rounded-full flex justify-center items-center border border-[#DBDBDC] z-10 transition-colors ${active === 'right' ? 'bg-[#5d50C6] text-white btnShadow shadow-[#DFDFDF]' : 'bg-white text-black'
                        }`}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Destination