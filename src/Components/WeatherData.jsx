import React from 'react'

import WeatherLogo from './WeatherData/WeatherLogo'
import Temp from './WeatherData/Temp'
import SubData from './WeatherData/SubData'
import CityName from '../CityName'
import Date from '../Date'
import SunData from './WeatherData/SunData'
import WeatherDesc from './WeatherData/WeatherDesc'

import NotFound from './NotFound'

// Needed Data
// city country temp desc humidity pressure wind sunrise sunset visibility
 

const WeatherData = ({weather,err}) => {
  return (
    err ? <NotFound /> :
    <div>
        <div className='flex justify-between'>
            <Date />
            <CityName city={weather.city} country={weather.country} />
        </div>

        <div className='flex font-dancing '>
            <Temp temp={weather.temp} />
            <div className='flex flex-col'>
                <WeatherLogo desc={weather.desc} />
                <WeatherDesc desc={weather.desc} />
            </div>
        </div>
        <div className='flex justify-between w-full  '>
            
                <SubData humidity={weather.humidity} pressure={weather.pressure} wind={weather.wind} />
                <SunData sunrise={weather.sunrise} sunset={weather.sunset} visibility={weather.visibility}/>
            
        </div>
    </div>

  )
}

export default WeatherData