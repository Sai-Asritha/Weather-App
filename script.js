const text=document.querySelector('.input-bar');
const searchbutton=document.getElementById('searchbtn');
const weatherimg=document.querySelector('.weather-img');
const temp=document.querySelector('.temp');
const desc=document.querySelector('.otherinfo');
const humid=document.getElementById('humidity');
const wind=document.getElementById('Wind-Speed');
const locationnotfound=document.querySelector('.loc-not-found');
const weather_body=document.querySelector('.weather-body');
const home=document.querySelector('.home');
async function checkWeather(city){
const api="8047b93e130941c3ee19cc6d83486cc3";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
const weather_data=await fetch(`${url}`).then(response => response.json());
if(weather_data.cod ==='404')
    {
        home.style.display="none";
        locationnotfound.style.display="flex";
        weather_body.style.display="none";
        return;
    }
    home.style.display="none";
locationnotfound.style.display="none";

weather_body.style.display="flex";

temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}<sup>°C</sup>`;
desc.innerHTML=`${weather_data.weather[0].description}`;
humid.innerHTML=`${weather_data.main.humidity}%`;
wind.innerHTML=`${weather_data.wind.speed}Km/hr`;
console.log(weather_data);
switch(weather_data.weather[0].main)
{
    case 'Clouds':
        weatherimg.src="assets/cloud.png";
        break;
    case 'Clear':
        weatherimg.src="assets/clear.png";
        break;
    case 'Rain':
        weatherimg.src="assets/rainy.png";
        break;
    case 'Mist':
        weatherimg.src="assets/mist.png";
        break;
    case 'Snow':
        weatherimg.src="assets/snow.png";
        break;
    case 'Sunny':
        weatherimg.src="assets/sunny.png";
        break;
        
    
}

}
searchbutton.addEventListener('click',()=>{
    checkWeather(text.value);
});
