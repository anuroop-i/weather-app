import React from 'react'

const WeatherDesc = ({desc}) => {
  return (
    <div className=' bg-grad w-40 font-dancing text-center border-2 border-slate-300 mt-5 mr-5 rounded-2xl'>
        <p className='text-4xl p-3'>{desc}</p>
    </div>
  )
}

export default WeatherDesc