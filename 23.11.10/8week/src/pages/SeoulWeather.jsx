import React from "react";
import styled from "styled-components";
import WeatherApi from "../api/WeatherApi";

const apiKey = "0f83819eddbcf0bdaf089b48de754b41";

export default function SeoulWeather() {
  const { setCity, weatherData } = WeatherApi(apiKey);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCity(e.target.value);
    }
  };

  return (
    <Div>
      <Input
        type="text"
        placeholder="도시를 입력하세요"
        onKeyPress={handleKeyPress}
      />
      {weatherData && (
        <ResultBox>
          <P fontSize="20px">{weatherData.name}</P>
          <P fontSize="45px">
            {Math.round((weatherData.main.temp - 273.15) * 10) / 10} °C
          </P>
          <P textAlign="right">{weatherData.weather[0].description}</P>
        </ResultBox>
      )}
    </Div>
  );
}

export const Div = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 70px;
  border: 3px solid black;
`;

export const ResultBox = styled.div`
  width: 200px;
  height: 150px;
  border: 2px solid black;
  margin-top: 50px;
`;

export const P = styled.p`
  font-size: ${(props) => props.fontSize || "15px"};
  text-align: ${(props) => props.textAlign || "left"};
  margin: 10px 4px;
`;
