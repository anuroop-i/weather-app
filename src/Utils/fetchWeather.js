const fetchWeather = async (city) => {
    const api_key = "5ba85b4c3e185721061ba9263c62b4c4";
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
  
    try {
      const response = await fetch(api_url);
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  export default fetchWeather
  