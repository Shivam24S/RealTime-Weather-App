import React, { useState } from "react";
import axios from "axios";

function App() {
  const [data, setdata] = useState({});

  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=be980568c54156ecb9e795b49715c30a`;

  const searchlocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setdata(response.data);
        console.log(response.data);
      });

      setlocation("");
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchlocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
          </div>
        </div>

        {data.main !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels like</p>
            </div>
            <div className="humadity">
              {data.main ? <p className="bold">{data.main.humidity}</p> : null}

              <p>Humadity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} Meter/sec</p>
              ) : null}
              <p>Wind speed</p>
            </div>
          </div>
        )}

      </div>
      <p className="copyright">Developed by Shivam shrivastav </p>
    </div>
  );
}

export default App;
