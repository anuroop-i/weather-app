import React from 'react'
import notFoundImg from '../assets/planet.png'

const NotFound = () => {
  return (
    <div className=' bg-grad text-center border-2 border-slate-300 my-5 mx-5 rounded-2xl min-h-50'>
        <div>
            <p className='text-4xl mt-20 font-comfortaa px-3'>404 : city not found</p>
            <img src={notFoundImg}  alt="NOT FOUND" />
        </div>     
    </div>
  )
}

export default NotFound