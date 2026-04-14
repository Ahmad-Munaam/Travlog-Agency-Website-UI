import React from 'react'
import logo1 from '../../assets/Images/Services/Logos/Group.png'
import logo2 from '../../assets/Images/Services/Logos/Group (1).png'
import logo3 from '../../assets/Images/Services/Logos/Group 2.png'
import logo4 from '../../assets/Images/Services/Logos/Group 3.png'
import logo5 from '../../assets/Images/Services/Logos/Group 9235.png'
import '../../App.css'

const Services = () => {
  return (
    <div className='flex items-center mx-auto overflow-hidden w-[85%]'>
      <div className="logosBar flex">
        <div className="logoSlider flex gap-[10%]"> 
          
          <img src={logo1} alt="Logo 1" className="h-8 w-auto flex-shrink-0" />
          <img src={logo2} alt="Logo 2" className="h-8 w-auto flex-shrink-0" />
          <img src={logo3} alt="Logo 3" className="h-8 w-auto flex-shrink-0" />
          <img src={logo5} alt="Logo 5" className="h-8 w-auto flex-shrink-0" />
          <img src={logo4} alt="Logo 4" className="h-8 w-auto flex-shrink-0" />
          
          <img src={logo1} alt="Logo 1" className="h-8 w-auto flex-shrink-0" />
          <img src={logo2} alt="Logo 2" className="h-8 w-auto flex-shrink-0" />
          <img src={logo3} alt="Logo 3" className="h-8 w-auto flex-shrink-0" />
          <img src={logo5} alt="Logo 5" className="h-8 w-auto flex-shrink-0" />
          <img src={logo4} alt="Logo 4" className="h-8 w-auto flex-shrink-0" />
        </div>
      </div>
    </div>
  )
}

export default Services