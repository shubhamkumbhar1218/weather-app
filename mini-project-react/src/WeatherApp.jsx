import SearchBox from "./SearchBox.jsx";
import Info from "./Info.jsx";
import { useState } from "react";
import CloudIcon from '@mui/icons-material/Cloud';
import "./WeatherApp.css";


export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Bangalore",
        country: "IN",
        feelsLike: 42.67,
        humidity: 49,
        temp: 35.99,
        tempMax: 35.99,
        tempMin: 32.94,
        weather: "smoke",
    }); 

    let updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
        <div className="WeatherApp">
            <h1>Weather <CloudIcon style={{color: "white"}}/> Widget</h1>
            <SearchBox updateInfo={updateInfo} />
            <Info info={weatherInfo}/>
        </div>
    );
}