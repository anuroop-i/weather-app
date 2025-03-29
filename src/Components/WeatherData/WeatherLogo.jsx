import React from 'react'
import { clear, clouds, drizzle, mist, rain, snow, thunderStorm } from '../../Utils/weatherIcons'

const WeatherLogo = ({desc}) => {


  let icon;
  
  switch (desc) {
    case "Clear":
    icon = (<img src={clear} className='w-60 animate-spin-slow' alt="Clear" />);
    break;
    case "Clouds":
    icon = (<img src={clouds} className='w-60 animate-zigzag' alt="Clouds" />);
    break;    
     case "Drizzle":
    icon = ( <img src={drizzle} className='w-60 animate-waves' alt="Drizzle" />);
    break;
    case "Mist":
    case "Haze":
    case "Smoke":
    case "Dust":
    case "Fog":
    icon = (<img src={mist} className='w-60 animate-zigzag' alt="Mist" />);
    break;
    case "Snow":
    icon = (<img src={snow} className='w-40 animate-zigzag' alt="Weather Icon" />);
    break;
    case "Rain":
    icon = ( <img src={rain} className='w-40 animate-rain' alt="Weather Icon" />);
    break;
    case "Thunderstorm":
    icon = (<img src={thunderStorm} className='w-40 animate-lightning' alt="Weather Icon" />);
    break;
    default:
    icon = (<img alt="Weather Icon" />);
  }





  
  return (
    <div className='bg-grad border-2  mr-5 aspect-square  text-center  border-slate-200 rounded-2xl'>
          {icon}
    </div>
  )
}

export default WeatherLogo