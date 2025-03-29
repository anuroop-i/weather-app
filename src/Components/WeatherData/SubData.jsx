import React from 'react'
import barometerImg from '../../assets/barometer.png'
import humidityImg from '../../assets/humidity.png'
import windImg from '../../assets/wind.png'


const SubData = ({humidity,pressure,wind}) => {
  return (
    <div className=' flex flex-col items-center 
    bg-grad border-2 border-slate-300 my-5  
    rounded-2xl font-dancing w-full mx-5 '>

      <div className=' flex items-center border-b-1 rounded-xl'>
            <div className='p-2'>
               <img className=' w-10' src={humidityImg} alt="" />
            </div>
            <div className='p-3'>
                <p>Humidity</p>
                <p>{humidity}%</p>
            </div>
      </div>

      <div className='pressure flex items-center border-b-1 rounded-xl'>
          <div className='py-3 px-4'>
            <img className='w-10' src={barometerImg} alt="" />
          </div>
          <div className='p-3'>
            <p>Pressure</p>
            <p>{pressure} HPa</p>
          </div>
      </div>

      <div className='wind flex items-center'>
          <div className='py-3 px-4'>
            <img className='w-10' src={windImg} alt="" />
          </div>
          <div className='p-3'>
            <p>Wind</p>
            <p>{wind} kmph</p>
          </div>
      </div>
     
    </div>
    
  )
}

export default SubData