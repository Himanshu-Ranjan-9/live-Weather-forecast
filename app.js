const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const apiKey = "74463cbfce39b6b3e5a6bfd649fbf256";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        if(!data.name){
            document.querySelector(".weather").style.display="none";
            document.querySelector(".error").style.display="block"
        }else{
            document.querySelector(".error").style.display="none";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr.";
        switch (data.weather[0].main) {
            case "Clouds":
                weatherIcon.src = "images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src = "images/clear.png";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.png";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.png";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Haze":
                weatherIcon.src = "images/drizzle.png";
                break;
            case "Thunderstorm":
                weatherIcon.src = "images/thunderstorm.png";
                break;
            
            default:
                weatherIcon.src = "images/mist.png";
                break;
        }
        document.querySelector(".weather").style.display = "block";

    }}
    //searchBox.querySelector("kye")


searchBtn.addEventListener("click", () => {
    console.log(searchBox.value)
    checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup",(enter)=>{
  //  if(enter.key==="Enter")
    checkWeather(searchBox.value);
})
