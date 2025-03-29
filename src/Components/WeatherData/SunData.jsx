import React from 'react'
import sunSetImg from '../../assets/sunset.png'
import visibilityImg from '../../assets/visibility.png'
import unixTime from '../../Utils/unixTime'

const SunData = ({sunrise,sunset,visibility}) => {

    
  return (
    
        <div className=' flex flex-col items-center 
        bg-grad border-2 border-slate-300 my-5 
        rounded-2xl  w-full mr-5 font-dancing '>
    
        
        <div className=' flex items-center border-b-1 rounded-xl'>
            <div className='py-3 px-4'>
               <img className='rotate-180 w-10' src={sunSetImg} alt="Sunrise" />
            </div>
            <div className='p-3'>
                <p>Sunrise</p>
                <p>{unixTime(sunrise)}</p>
            </div>
        </div>
        <div className='flex items-center border-b-1 rounded-xl'>
            <div className='py-3 px-4'>
               <img className='w-10' src={sunSetImg} alt="Sunset" />
            </div>
            <div className='p-3'>
                <p>Sunset</p>
                <p>{unixTime(sunset)}</p>
            </div>
        </div>

        <div className='visibility flex items-center'>
              <div className='py-3 px-4'>
                <img className=' w-10' src={visibilityImg} alt="Visibility" />
              </div>
              <div className='p-3'>
                  <p>Visibility</p>
                  <p>{visibility}m</p>
              </div>
          </div>

        </div>
  )
}

export default SunData