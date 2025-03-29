import React from 'react'

const Temp = ({temp}) => {
  return ( 
    <div className='text-center bg-grad flex flex-col justify-around border-2 rounded-2xl border-slate-300 w-full mx-5'>
      <div className='flex flex-col justify-around'>
        <p className='text-5xl '>Feels like</p>
        <h3 className='text-7xl'>{temp}°C</h3>
      </div>
    
    </div>
  )
}

export default Temp