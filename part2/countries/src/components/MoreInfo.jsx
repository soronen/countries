import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MoreInfo({ country }) {
  const weatherapi = `https://api.open-meteo.com/v1/forecast?latitude=${country.latlng[0]}&longitude=${country.latlng[1]}&daily=sunrise,sunset&current_weather=true&timezone=auto`;

  const [weather, setWeather] = useState({ null: true });

  useEffect(() => {
    axios.get(weatherapi).then((result) => {
      console.log(result, typeof result);
      setWeather(result.data);
    });
  }, []);

  if (weather.null !== true) {
    return (
      <div>
        <h1>
          {country.name.common} {country.flag}
        </h1>
        <img src={country.flags.png} alt='Country flag'></img>
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
        <h2>Wheater(sic)</h2>
        <div>
          <p>Temperature: {weather.current_weather.temperature}</p>
          <p>Windspeed {weather.current_weather.windspeed}</p>
          <p>Sunrise 🌅 {new Date(weather.daily.sunrise[0]).toLocaleTimeString()}</p>
          <p>Sunset 🌄{new Date(weather.daily.sunset[0]).toLocaleTimeString()}</p>
        </div>
        <p></p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {country.name.common} {country.flag}
        </h1>
        <img src={country.flags.png} alt='Country flag'></img>
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population}</p>
        <h3>Languages: </h3>
        <ul>
          {Object.values(country.languages).map((element) => {
            return <li key={element}>{element}</li>;
          })}
        </ul>
      </div>
    );
  }
}
