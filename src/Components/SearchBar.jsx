import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";


const SearchBar = ({input,setInput,handleClick}) => {




  return (
    <div className='bg-grad flex border-2 rounded-2xl mt-10 mx-5 border-slate-300 justify-between px-2 '>
        <div className='px-2 py-6'>
            <FaLocationDot size={40}  />
        </div>
        <div className='px-2 py-4 w-full'>
            <input className='w-full h-full text-3xl outline-none'
             type="text" placeholder='Enter City Name'
             value={input} onChange={(e)=>setInput(e.target.value)} />
        </div>
        <div className='px-2 py-5'>
            <button onClick={handleClick} className='border-2 bg-slate-300 border-slate-300 rounded-2xl cursor-pointer w-13 h-13 px-2.5 py-1 hover:bg-slate-400 transition duration-200'>
            <FaMagnifyingGlass color='black' size={30} />
            </button>
        </div>
    </div>
  )
}

export default SearchBar