const apiKey = "0a5f0ff861d2e81a7ea24bb5313214aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search a");
const weatherIcon = document.querySelector(".img-weather");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".Temperature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".thermal").innerHTML = Math.round(data.main.feels_like) + "°c";

    if(data.weather[0].main === 'Clear')
       weatherIcon.src = "./img/clear.png"; 

    else if(data.weather[0].main === 'Clouds')
        weatherIcon.src = "./img/clouds.png"; 

    else if(data.weather[0].main === 'Drizzle')
        weatherIcon.src = "./img/drizzle.png"; 

    else if(data.weather[0].main === 'Mist')
        weatherIcon.src = "./img/mist.png"; 

    else if(data.weather[0].main === 'Rain')
        weatherIcon.src = "./img/rain.png"; 

    else if(data.weather[0].main === 'Snow')
        weatherIcon.src = "./img/snow.png"; 
    
    document.querySelector(".main").style.display = "block";
    document.querySelector(".footer").style.display = "block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

