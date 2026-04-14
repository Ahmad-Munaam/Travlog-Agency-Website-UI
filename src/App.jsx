import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import object from './assets/Images/Services/OBJECTS.png'
import Category from './Components/Services/ServicesCategory/Category'
import object2 from './assets/Images/Services/Ellipse 24.png'
import Destination from './Components/Destination/Destination'
import destiObjects from './assets/Images/dESTINATION/OBJECTS.png'
import DreamLocation from './Components/DreamLocation/DreamLocation'
import KeyFeatures from './Components/KeyFeatures/KeyFeatures'
// import redCircle from './assets/Images/KeyFeatures/Group.png'
// import yellowCircle from './assets/Images/KeyFeatures/Clip path group.png'
import rightVector from './assets/Images/DreamLocation/VectorRight.png'
import Testimonials from './Components/Testimonials/Testimonials'
import vector from './assets/Images/Testimonials/Layer_1.png'
import Contact from './Components/Contact/Contact'
import contactVector from './assets/Images/Contact/Graphic_Elements.png'
import Footer from './Components/Footer/Footer'
import rightObject from './assets/Images/Contact/OBJECTS.png'
import headerEllipse from './assets/Images/header/Ellipse 23.png'
import arrowup from './assets/Images/Hero/Vector (arrow).png'

const App = () => {
  const moveUp = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className="fixed right-[10px] bottom-[40px] h-[58px] w-[58px] sm:w-[68px] sm:h-[68px] md:w-[86px] md:h-[86px] z-[9999] flex justify-center items-center bg-slate-500 rounded-full cursor-pointer" onClick={() => {
        moveUp('header')

      }}>

        <img src={arrowup} alt="" className=' object-contain rotate-[-60deg] size-8' />

      </div>
      <div className=' w-full h-full relative' id='header'>
        <div className="absolute top-0 left-0 z-0 3xl:size-full">
          <img src={headerEllipse} alt="" className='z-0' />
        </div>
        <Header />
      </div>
      <div className="  mainContainer my-[18px] mt-[68px] mx-auto min-w-[380px] 3xl:max-w-full flex flex-col items-center z-10 relative overflow-visible">

        <div className=' hero  relative w-full'>
          <div className="3xl:max-w-[1700px] mx-auto">
            <Hero />
          </div>
        </div>
        <div className="services flex w-full relative justify-center items-center">
          <div className=' hidden md:block 3xl:hidden left-[20px] absolute md:top-0 top-[25px] '>
            <img src={object} alt="" className=' z-0  md:h-auto h-[116px]' />
          </div>
          <div className=' absolute right-0 z-0'>
            <img src={object2} alt="" />
          </div>
          <div id='services' className="w-full my-[110px] 3xl:max-w-[1700px] mx-auto relative items-center">
            <div className=' hidden 3xl:block left-[20px] absolute  top-[-86px] '>
              <img src={object} alt="" className=' z-0  md:h-auto h-[116px]' />
            </div>
            <Services />
          </div>
        </div>
        <div className="w-full">
          <div className='3xl:max-w-[1700px] 3xl:mx-auto my-[12px] flex flex-col'>
            <Category />
          </div>
        </div>
        <div id='destination' className="destination  relative w-full flex justify-center my-[24px] 3xl:max-w-[1700px] 3xl:mx-auto ">
          <img src={destiObjects} alt="" className='lg:block hidden absolute lg:right-[12px] xl:right-[25px] 2xl:right-[30px] top-[12%] shadow-[#E1E1E1] lg:w-[62px] xl:w-[72px] 2xl:w-[86px] ' />
          <div className=' w-[85%] '>
            <Destination />
          </div>
        </div>
        <div className="DreamLocationContainer my-[56px] w-full relative 3xl:max-w-[1700px] 3xl:mx-auto">
          <div className="hidden absolute lg:top-[52%] xl:top-[40%] 2xl:top-[42%]  lg:w-[68px] lg:h-[68px] xl:w-[86px] xl:h-[86px]  midXl:h-[72px] midXl:w-[72px] 3xl:w-[110px] 3xl:h-[110px] bg-[#FACD49] lg:right-[42px] xl:right-[56px] 2xl:right-[86px] lg:flex justify-center items-center p-2 rounded-full
          
          fulllg:top-[40%]
          midlg:top-[37%]
          smlg:top-[37%]
          smlg:h-[62px]
          smlg:w-[62px]
          
          ">
            <img src={rightVector} alt="" />
          </div>
          <DreamLocation />
        </div>
        <div className="w-full 3xl:max-w-[1700px] mx-auto">

          <div className="keyFeatures my-[56px] mx-auto w-[85%] relative z-[9999] ">
            <KeyFeatures />
          </div>
        </div>
        <div className="w-full relative">


          <div className="Testimonials w-full my-[72px]  flex justify-center items-center relative h-full 3xl:max-w-[1700px] mx-auto">
            <img src={vector} alt="" className=' absolute z-0 w-full xl:mb-[110px]
          mb-[160px]
          sm:mb-[150px]
          mdxl:mb-[130px] 
          md:mb-[156px]
          lg:mb-[186px]
          '/>
            <Testimonials />

          </div>

        </div>
        <div className="w-full relative">
          <img src={rightObject} alt="" className=' absolute right-0 hidden md:block bottom-[-15%] lg:bottom-[-15%]  xl:right-0 2xl:bottom-[-20%] 3xl:bottom-[-25%] xl:h-auto h-[45%] lg:h-[45%] 3xl:h-[480px]' />

          <div id='contact' className="Contact flex justify-center w-full my-[56px] relative 3xl:max-w-[1700px] mx-auto">
            <img
              src={contactVector}
              alt="dots"
              className="absolute lg:top-[-56px] md:top-[-42px] top-[-32px] left-[5%] z-50 lg:size-auto size-[88px] md:size-[110px] minsm:hidden "
            />
            <Contact />

            {/* <img src={rightObject} alt="" className=' absolute right-0 hidden md:block bottom-[-25%] lg:bottom-[-30%] xl:bottom-[-35%] xl:right-[-1%] 2xl:right-0 2xl:bottom-[-30%] xl:h-auto h-[50%] lg:h-[55%]' /> */}
          </div>
        </div>
        <div className="footer w-full flex justify-center my-[56px] 3xl:max-w-[1700px] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  )
}
export default App