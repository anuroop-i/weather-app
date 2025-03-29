import React from 'react'
import dateHelper from './Utils/dateHelper'

const Date = () => {

  const date = dateHelper()

  return (
    <div className=' flex flex-col bg-grad justify-center font-dancing w-full text-center space-between border-2 border-slate-300 mb-5 mt-5 mx-5 rounded-2xl min-h-20'>
        <div>
            <p className=' text-3xl'>{date.day}</p>
            <p className='text-xl'>{date.date} {date.month} {date.year}</p>
        </div>     
    </div>

  )
}

export default Date