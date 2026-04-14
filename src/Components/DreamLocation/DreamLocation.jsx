import React from 'react'
import mainImage from '../../assets/Images/DreamLocation/My project 1.png'
import mainBg from '../../assets/Images/DreamLocation/Rectangle 7.png'
import '../../Font.css'
import Card from './Card/Card'
import vector from '../../assets/Images/DreamLocation/Vector.png'
import purpleEllipse from '../../assets/Images/DreamLocation/Ellipse 14.png'
import yellowEllipse from '../../assets/Images/DreamLocation/Ellipse 16.png'
import orrangeEllipse from '../../assets/Images/DreamLocation/Ellipse 17.png'
import bigOrangeEllipse from '../../assets/Images/DreamLocation/Ellipse 18.png'
import purpleLeftEllipse from '../../assets/Images/DreamLocation/Ellipse 15.png'

const DreamLocation = () => {
    return (
        <div className='mt-[64px] md:mt-0 md:w-full lg:w-[92.5%] flex lg:flex-row flex-col lg:items-end lg:justify-between gap-[23px] lg:gap-[5%] '>
            <div className='oneMain relative flex justify-start items-center minsm:w-[90%] w-[80%] sm:w-[75%]  md:w-[75%] midXl:w-[80%] fulllg:w-[65%]'>
                <img src={mainBg} alt="background" className='relative left-0 w-[80%]  h-[80%] object-contain z-0' />
                <img src={mainImage} alt="main" className='absolute w-[90%] bottom-0 h-[120%] top-[-16%]  object-contain z-10' />
                <div className="  maxsm:right-[-5%] absolute top-[0%] bg-[white] right-[1%]  lg:right-[-2%]
                 xl:right-[7%] 2xl:right-[5%] lg:px-6 
                  rounded-l-full rounded-r-full  py-2 px-3 
                  lg:py-4 
                   fulllg:py-4
                   fulllg:px-7
                   fulllg:right-[7%]

                    midlg:py-3
                   midlg:px-7
                   midlg:right-[7%]

                    smlg:py-4
                   smlg:px-7
                   smlg:right-[7%]

                   mdxl:py-5
                   mdxl:px-8
                   mdxl:right-[3%]
                   
                    md:py-5
                   md:px-8
                   md:right-[1%]

                    sm:py-4
                   sm:px-7
                   sm:right-[-3%]

                   lastsm:py-4
                   lastsm:px-5
                   lastsm:right-[-2%]

                     extrasmallmid:py-3
                   extrasmallmid:px-3
                   extrasmallmid:right-[-5%]
                   extrasmallmid:top-[-5%]


                   minsm:py-3
                   minsm:px-3
                   minsm:right-[-4%]
  minsm:top-[-8%]
                xl:px-7  xl:py-4 2xl:py-5 2xl:px-7 
                midsm:right-[20px] midsm:py-2 midsm:px-3 
                shadow-2xl flex justify-center items-center
                 minsm:gap-1 gap-3 z-40">
                    <img src={vector} alt="" className=' maxsm:size-7 minsm:size-5 size-8 
                    
                    
                    lg:size-[52px] fulllg:size-8
                    midlg:size-9
                    smlg:size-9
                    mdxl:size-10
                    ' />
                    <span className=' text-[#191825] font-[circularStd] 2xl:text-[36px] sm:text-[20px] md:text-[22px] lg:text-[20px] xl:text-[23px] leading-[120%]   lastsm:gap-1 fulllg:text-[18px]
                    
                    midlg:text-[22px]
                    lastsm:text-[18px]
                    extrasmallmid:text-[16px]
                    minsm:text-[14px]
                    '>Discounted Price</span>
                </div>
                <img src={purpleEllipse} alt="" className='  absolute xl:top-[-115px] 2xl:top-[-115px] 3xl:top-[-120px] maxsm:top-[-26%]    lg:top-[-22%] right-[18%] z-30 maxsm:size-[76px]  md:size-auto minsm:size-14
                
                fulllg:top-[-120px]
                midlg:top-[-120px]
                smlg:top-[-122px]
                mdxl:top-[-121px]
                md:top-[-121px]
                sm:top-[-125px]
                lastsm:top-[-88px]
                extrasmallmid:top-[-78px]
                minsm:top-[-76px]

                xxsm:size-[62px]
                xxsm:top-[-82px]
                ' />
                <img src={yellowEllipse} alt="" className='absolute 
                 xl:right-[6%] 2xl:right-[5%] right-[-2%] top-[20%] z-30 sm:right-[-3%] sm:top-[15%] md:top-[13%] maxsm:right-[-4%] maxsm:top-[18%] maxsm:size-8 sm:size-[68px] size-7 lastsm:top-[15%]  
                
                fulllg:right-[7%]
                fulllg:top-[10%]
                midlg:top-[9%]
                midlg:right-[7%]
                smlg:right-[7%]

                mdxl:right-[3%]
                md:right-[1%]
                lastsm:right-[1%]
                lastsm:size-[46px]

                extrasmallmid:size-[42px]
                extrasmallmid:right-[-5%]
                extrasmallmid:top-[12%]
                minsm:size-[38px]
                minsm:top-[13px]
                minsm:right-[-1%]
                midsm:right-[5%]
                midsm:top-[2%]
                ' />
                <img src={orrangeEllipse} alt="" className=' absolute top-[35%] right-[35%] sm:top-[30%] z-30' />
                <img src={bigOrangeEllipse} alt="" className=' absolute right-[12%] sm:right-[30%] bottom-[27%] z-30
                lastsm:right-[25%]
                extrasmallmid:right-[25%]
                extrasmallmid:bottom-[20%]
                minsm:right-[25%]
                minsm:size-[32px]
                ' />
                <img src={purpleLeftEllipse} alt="" className='lastsm:top-[-8%] absolute left-[12%] top-[-10%] sm:top-[-8%] md:left-[14%] lg:left-[18%] xl:left-[12%] md:top-[-7%] lg:top-[-4%] xl:top-[-3%] z-30 minsm:size-7 minsm:top-[-6%]
                
                fulllg:left-[12%]
                midlg:left-[10%]
                smlg:left-[10%]
                mdxl:left-[10%]
                extrasmallmid:left-[7%]
                
                
                ' />
            </div>
            <div className="sm:mt-0 mt-[36px] lg:p-0 sm:p-2 content twoMain flex flex-col items-center md:items-end lg:items-start lg:justify-between  gap-[38px] md:gap-[18px] lg:gap-[25px] xl:gap-[42px] 2xl:gap-[56px] h-full max-w-[95%] md:mx-0 mx-auto md:w-full lg:w-[35%]  xl:w-[35%] 3xl:w-[35%] 2xl:w-[30%]
            smlg:gap-[32px]
            midlg:gap-[32px]
            
            ">

                <div className="lg:w-auto w-[95%] md:items-start items-center md:w-[55%] one flex gap-4 flex-col md:gap-4 lg:gap-7 2xl:gap-[28px]
                smlg:gap-[18px]
                ">
                    <div className='flex flex-col  md:gap-3 xl:gap-4 2xl:gap-4 md:text-start text-center
                    
                    '>
                        <h3 className='tracking-[0.3rem] font-[circularStd] text-[20px] md:text-[20px] xl:text-[28px] leading-[120%] text-[#F85E9F] 2xl:text-[32px] font-bold fulllg:text-[24px]'>TRAVEL POINT </h3>

                        <h4 className='2xl:text-[42px] 3xl:text-[48px] text-[36px] md:text-[36px] xl:text-[38px] font-[circularStd] text-[#191825] minsm:text-[28px] leading-[110%] xl:leading-[120%] tracking-[0%] flex flex-col font-[550] midXl:text-[32px] fulllg:text-[36px] midlg:text-[32px]
smlg:text-[30px]
smlg:leading-[120%]'>


                            <span className='hidden md:flex flex-col'>
                                <span>We helping you find</span>
                                <span>your dream location</span>
                            </span>

                            <span className='md:hidden flex justify-center'>
                                We helping you find your dream location
                            </span>
                        </h4>

                    </div>
                    <p className='2xl:text-[18px] 3xl:text-[22px]  md:text-[16px] fulllg:text-[16px] xl:text-[18px] font-normal font-[interFont] text-[#19182580] leading-[160%] tracking-[0%] text-center md:text-start minsm:text-[12px] xl:w-full 2xl:w-[95%] 3xl:w-auto midXl:text-[16px] 
                    midlg:text-[14px]
                    smlg:text-[12px]
                    sm:text-[18px]
                    '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
                </div>
                <div className="two grid grid-cols-2 minsm:grid-cols-1 md:gap-[18px] 3xl:gap-[18px] 2xl:gap-[8px] md:place-items-start place-items-center gap-[10px] w-[70%] md:w-[55%] lg:w-full 2xl:gap-y-[24px]">
                    <Card
                        num="1500+"
                        description="Holiday Packages"
                    />
                    <Card
                        num="1000"
                        description="Luxury Hotel"
                    />
                    <Card num="7"
                        description="Premium Airlines"
                    />
                    <Card
                        num="2k+"
                        description="Happy Customer"
                    />
                </div>
            </div>
        </div>
    )
}
export default DreamLocation