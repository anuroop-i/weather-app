import React, { useEffect, useState } from 'react'
import SearchBar from './Components/SearchBar'
import WeatherData from './Components/WeatherData'
import fetchWeather from './Utils/fetchWeather';

const App = () => {
  const [input,setInput] = useState('Dubai')
  const [weather,setWeather] = useState({})
  const [error,setError] = useState(false)

  const handleClick = async() => {
    const weatherData = await fetchWeather(input)
    setError(false)
      if(weatherData == null) {
        setError(true)
        return
    }

    const weatherReport = {
      city : weatherData.name,
      country : weatherData.sys.country,
      temp : weatherData.main.temp,
      desc : weatherData.weather[0].main,
      humidity : weatherData.main.humidity,
      pressure : weatherData.main.pressure,
      wind : weatherData.wind.speed,
      sunrise : weatherData.sys.sunrise,
      sunset : weatherData.sys.sunset,
      visibility : weatherData.visibility
    }
    setWeather(weatherReport)
  }
  useEffect(() => {
    handleClick()
    setInput('')
  },[])

  return (
<main className=' bg-image text-white flex justify-center items-center w-full min-h-[650px]'>
  <div className='flex flex-col  backdrop-blur-xs drop-shadow-2xl bg-[rgba(111,111,111,0.5)] mt-10 w-full  min-h-[800px] max-w-[00px] min-w-[400px] max-w-[500px] border-3 border-slate-300 rounded-2xl'>
    <SearchBar input={input} setInput={setInput} handleClick={handleClick} />
    <WeatherData weather={weather} err={error} />
  </div>
</main>

  )
}

export default App

