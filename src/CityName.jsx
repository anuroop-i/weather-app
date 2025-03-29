import React from 'react'

const CityName = ({city,country}) => {
  return (
    
    <div className=' bg-grad flex flex-col justify-center w-full text-center border-2 border-slate-300 my-5 mr-5 rounded-2xl min-h-20'>
        <div>
            <p className='text-4xl font-dancing px-3'>{city}   <span className='text-lg'>{country}</span></p>
        </div>     
    </div>

  )
}

export default CityName