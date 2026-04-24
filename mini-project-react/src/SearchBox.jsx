import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("");

    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async(city) => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let data = await response.json();
        console.log(data);

        if (data.cod !== 200) {
            throw new Error(data.message);
        }

        let result = {
            city: city,
            temp: data.main.temp,
            tempMin: data.main.temp_min,
            tempMax: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
            country: data.sys.country,
            };

        console.log(result);
        return result;
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        try {
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
        } catch (err) {
            console.log(err);
            setError("City not found. Please try again.");
        }
        
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
                <br/><br/>
                <Button variant="contained" type="submit">Search</Button><br></br><br></br>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    );
}