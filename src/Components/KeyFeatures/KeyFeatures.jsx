import React from 'react'
import '../../App.css'
import location from '../../assets/Images/KeyFeatures/Group 9239.png'
import schedule from '../../assets/Images/KeyFeatures/Group 9239 (1).png'
import coupen from '../../assets/Images/KeyFeatures/Group 9239 (2).png'
import Card from './FeatureCard/Card'
import redCircle from '../../assets/Images/KeyFeatures/Group.png'
import yellowCircle from '../../assets/Images/KeyFeatures/Clip path group.png'
import rectangle1 from '../../assets/Images/KeyFeatures/Rectangle 9.png'
import rectangle2 from '../../assets/Images/KeyFeatures/Rectangle 10.png'
import map from '../../assets/Images/KeyFeatures/map.11 1.png'

const KeyFeatures = () => {
    return (
        <div className=' lg:w-auto w-[95%] lg:mx-0  flex flex-col lg:grid lg:grid-cols-2 gap-[12px] relative minsm:gap-0'>

            <div className="one lg:order-1 mdxl:w-full mdxl:items-end order-2 flex flex-col items-end gap-[42px] xl:gap-[62px]">

                <div className='w-full flex flex-col gap-[24px]'>
                    <div className="flex flex-col gap-[6px]">
                        <h2 className=' text-[#F85E9F] font-[circularStd] xl:text-[23px] text-[23px] 2xl:text-[28px] 3xl:text-[28px] leading-[120%] tracking-[0.3rem] minsm:text-[18px] '>KEY FEATURES</h2>
                        <p className='text-[#191825] font-[circularStd] text-[36px] xl:text-[44px] 3xl:text-[56px]
                        minsm:text-[22px]
                        extrasmallmid:text-[28px] font-[550]

                        '>We offer best services</p>
                    </div>
                    <p className='xl:text-[18px] md:w-[90%] lg:w-auto xl:w-[90%] 2xl:w-[85%] md:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-[interFont] text-[#19182580] leading-[160%] tracking-[0%]
                    
                    extrasmallmid:text-[14px]
                    minsm:text-[12px]
                    '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </div>
                <div className="2nd w-[90%] xl:w-[85%] flex flex-col">
                    <Card
                        image={location}
                        head="We offer best services"
                        description="Lorem Ipsum is not simply random text"
                    />
                    <Card
                        image={schedule}
                        head="Schedule your trip"
                        description="It has roots in a piece of classical"
                    />
                    <Card
                        image={coupen}
                        head="We offer best services"
                        description="Lorem Ipsum is not simply random text"
                    />
                </div>
            </div>

        <div className="two lg:order-2 lg:mb-0 mb-[24px] minsm:mb-0 flex items-center md:justify-start justify-center relative w-full md:w-[80%] mdxl:w-[70%] lg:w-full lg:h-auto lg:min-h-auto sm:h-[600px] md:h-[650px] h-[500px]  minsm:h-[400px]">
                <img src={yellowCircle} alt="" className='
                xl:w-auto xl:h-auto
                lg:w-[250px] lg:h-[210px] fulllg:w-[270px] fulllg:h-[230px] midlg:right-[-3%] smlg:top-[3%] midlg:top-[3%]  lg:right-[-8%] fulllg:right-[4%] 
                absolute fullxl:right-[-7%]
                 xl:right-[-15%]
                 midXl:top-[35px]
                  fullxl:top-[35px] top-[15px] z-0 2xl:top-[20px] 
                 2xl:right-[0%] 
                 3xl:right-[-5%] 3xl:top-[25px]
                 mdxl:right-[-10%]
                 mdxl:top-[2%]
                md:top-[-1%]
                md:h-auto
                md:w-auto
                md:right-[-15%]
                w-[290px]
                h-[220px]
                sm:right-[15%]
                sm:top-[6%]
                lastsm:right-[-5%]
                extrasmallmid:right-[-6%]
                extrasmallmid:h-[180px]
                extrasmallmid:w-[240px]
                extrasmallmid:top-[6%]
                minsm:h-[100px]
                minsm:w-[120px]
                 minsm:right-[23%]
                 minsm:top-[3%]
                  
                 ' />



                <img src={redCircle} alt="" className='xl:w-auto xl:h-auto lg:w-[180px] lg:h-[180px]  absolute fullxl:right-[17%] smlg:right-[12%] midlg:right-[18%] 
                fulllg:right-[30%] 
                xl:right-[10%] 
                2xl:right-[20%] 
                3xl:right-[17%] 
                lg:top-[-1%] 
                fulllg:top-0 
                xl:top-0 
                z-10
                mdxl:right-[27%]
                mdxl:top-[-2%]
                md:right-[18%]
                md:top-[-5%]
                md:h-auto
                md:w-auto
                w-[180px]
                h-[210px]
                sm:right-[40%]
                sm:top-[-7px]
               lastsm:right-[20%]
                lastsm:top-[-9%]
                extrasmallmid:right-[20%]
                extrasmallmid:top-[0%]
                extrasmallmid:h-[160px]
                extrasmallmid:w-[140px]
                minsm:top-[-5%]
                minsm:right-[35%]
                minsm:h-[100px]
                minsm:w-[80px]

                ' />
                <img src={rectangle1} alt="" className='sm:h-[80%] md:h-[85%] lg:h-[75%] fulllg:w-[60%] fullxl:top-[10%] 3xl:w-auto xl:h-[80%] absolute lg:top-[10%] xl:top-[5%] left-0 3xl:h-[90%] z-20 3xl:left-[44px]
                h-[80%]
                sm:mx-0
                mx-[5%]
                extrasmallmid:h-[70%] 
                 minsm:h-[70%]
                 minsm:left-0
                 minsm:w-[50%]
                 minsm:top-0
                 minsm:min-w-[160px]
                ' />
                <img src={rectangle2} alt="" className='md:bottom-[-5%] fulllg:right-[15%] smlg:right-[-10%] absolute 3xl:bottom-[-15%] 2xl:bottom-[-17%] lg:bottom-[-5%] xl:bottom-[-10%] h-[65%] xl:h-auto  2xl:h-[80%] 3xl:h-[75%] 2xl:right-[15px] 3xl:right-[-9px] mdxl:right-[10%] md:right-[7%] lg:right-0 z-30 fullxl:bottom-[-15%]
                sm:bottom-[-8%]
                sm:right-[20%]
                lastsm:bottom-[-8%]
                lastsm:right-[5%]
                extrasmallmid:h-[60%]
                extrasmallmid:bottom-0
                extrasmallmid:right-[0%]
                minsm:h-[50%]
                minsm:bottom-[20%]
                minsm:left-[30%]
                ' />

                <div className='bg-[#FFFFFF] flex justify-center items-center absolute mdxl:top-[19%] lg:top-[18%] z-40 fullxl:right-[15%] fullxl:top-[20%] fulllg:right-[20%] mdxl:right-[15%] lg:right-[8%] midlg:right-[13%] 2xl:right-[18%] 3xl:right-[14%]  xl:py-5 xl:px-6 lg:px-4 lg:py-3 md:py-3 md:px-5  rounded-full gap-2 minsm:gap-1
                md:right-[7%]
                md:top-[20%]
                sm:top-[23%]
                sm:right-[36%]
                py-3
                px-4
                lastsm:py-3
                lastsm:px-4
                lastsm:top-[24%]
                lastsm:right-[20%]

                extrasmallmid:top-[22%]
                extrasmallmid:right-[10%]
                minsm:right-[37%]
                minsm:top-[15%]
                minsm:py-1
                minsm:px-2

                '>
                    <img src={map} alt="" className='md:size-auto size-6 minsm:size-5' />
                    <p className=' text-[#191825] text-[16px] md:text-[23px]  midXl:text-[23px] font-[circularStd] 3xl:text-[32px] lg:text-[22px] xl:text-[28px]
                    
                    minsm:text-[8px]
                    '>Paradise on Earth</p>
                </div>
            </div>
        </div>
    )
}
export default KeyFeatures