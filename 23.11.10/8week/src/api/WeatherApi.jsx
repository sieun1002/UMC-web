import { useState, useEffect } from "react";

function WeatherApi(apiKey) {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생", error);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  return { city, setCity, weatherData };
}

export default WeatherApi;
