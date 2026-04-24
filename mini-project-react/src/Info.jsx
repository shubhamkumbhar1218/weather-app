import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "@mui/icons-material/AcUnit";

export default function Info({ info }) {

    let Hot_url = "https://cdn.pixabay.com/photo/2023/11/20/18/21/sunset-8401670_1280.jpg";
    let Rain_url = "https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg";
    let Cold_url = "https://images.unsplash.com/photo-1768677353546-95388e4d12c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ width: "100%", maxWidth: 600, 
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    background: "rgba(112, 163, 169, 0.45)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)"
                    }
                    }}>
                <CardMedia
                sx={{ height: 140 }}
                image={ 
                    info.humidity > 60 
                    ? Rain_url 
                    : info.temp > 30 
                    ? Hot_url 
                    : Cold_url
                }
                title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{" "}
                        {info.humidity > 60 ? (
                            <ThunderstormIcon/> 
                        ) : info.temp > 30 ? (
                            <WbSunnyIcon/>
                        ) : ( 
                            <AcUnitIcon/>
                        )}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Feels Like = {info.feelsLike}&deg;C</p>
                        <p>Weather = {info.weather}</p>
                        <p>Country = {info.country}</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}