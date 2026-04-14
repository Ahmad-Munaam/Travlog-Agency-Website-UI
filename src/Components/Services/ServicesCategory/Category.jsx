import React from 'react'
import Card from './Card/Card'
import image1 from '../../../assets/Images/Services/CardImages/destination 1.png'
import image2 from '../../../assets/Images/Services/CardImages/booking 1.png'
import '../../../App.css'
const Category = () => {
    const cardData = [
        {
            images: image1,
            head: "Best Tour Guide",
            content: "What looked like a small patch of purple grass, above five feet."
        },
        {
            images: image2,
            head: "Easy Booking",
            content: "Square, was moving across the sand in their direction."
        },
        {
            images: image1,
            head: "Best Tour Guide",
            content: "What looked like a small patch of purple grass, above five feet."
        },
        { images: image1, head: "Best Tour Guide", content: "What looked like a small patch of purple grass, above five feet." },
        {
            images: image2,
            head: "Easy Booking",
            content: "Square, was moving across the sand in their direction."
        },
        {
            images: image1,
            head: "Best Tour Guide",
            content: "What looked like a small patch of purple grass, above five feet."
        }
    ];
    return (
        <div className='w-[85%] mx-auto'>
            <div className='flex flex-col items-center md:grid grid-cols-[40%_60%] gap-6 sm:gap-4'>
                <div className="content flex flex-col items-center md:items-start justify-center md:text-start gap-[14px]">
                    <div className='text-[#F85E9F] font-bold leading-[120%] tracking-[0.35rem] text-[23px] 2xl:text-[38px] font-[circularStd]'>
                        SERVICES
                    </div>
                    <div className='lg:text-[44px] text-[#191825] font-bold leading-[100%] sm:leading-[120%] tracking-[0%] fullxl:w-[90%] 2xl:w-[90%] 2xl:text-[56px] 3xl:text-[62px] md:w-auto minsm:w-[100%] w-[85%] text-[38px] md:text-[42px] md:text-start text-center minsm:text-[32px] font-[circularStd]'>
                        Our top value categories for you
                    </div>
                </div>

                <div className="w-full overflow-hidden">
                    <div className="relative">
                        <div className="flex animate-scroll" style={{ width: 'max-content' }}>
                            
                            <div className="flex" style={{ width: 'max-content' }}>
                                {cardData.map((card, index) => (
                                    <Card key={`${index}`}
                                        images={card.images}
                                        head={card.head}
                                        content={card.content}
                                    />
                                ))}
                            </div>
                            
                            <div className="flex" style={{ width: 'max-content' }}>
                                {cardData.map((card, index) => (
                                    <Card
                                        key={`second-${index}`}
                                        images={card.images}
                                        head={card.head}
                                        content={card.content}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category