
function getWeather() {
let cityname=document.getElementById('getval').value
let key= 'd72729578543cfc435344f99b226b1c9';

let wurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}&units=metric`

axios.get(wurl)
  .then(function (response) {
   

    const weatherData = response.data;
    console.log(weatherData);
    const cloudPercentage = weatherData.clouds.all;
    let weatherDescription;
    
    document.querySelector(".modal-title").innerHTML = cityname;
    document.querySelector(".temp").innerHTML = weatherData.main.temp;
    document.querySelector(".feelslike").innerHTML = weatherData.main.feels_like;
    document.querySelector(".wind").innerHTML = weatherData.wind.speed;

if(weatherData.main.temp>40)
    {
        document.querySelector(".temp").style="color:red"
    }
    
    if (cloudPercentage > 90) {
        weatherDescription = "Cloudy";
        document.querySelector(".modal-body img").src = "/images/ccloudy.jpg";
        document.querySelector(".env").innerHTML=weatherDescription 
    } else if (cloudPercentage > 70) {
        weatherDescription = "Mostly Cloudy";
        document.querySelector(".modal-body img").src = "/images/mcloudy.jpg";
        document.querySelector(".env").innerHTML=weatherDescription 
    } else if (cloudPercentage > 30) {
        weatherDescription = "Partly Cloudy";
        document.querySelector(".modal-body img").src = "/images/pcloudy.png";
        document.querySelector(".env").innerHTML=weatherDescription 
    } else {
        weatherDescription = "sunny";
        document.querySelector(".modal-body img").src = "/images/sunny.jpg";
        document.querySelector(".env").innerHTML=weatherDescription 
    }





  })
  .catch(function (error) {
    
    console.log(error);
  })
  .finally(function () {
  console.log("finally");
  });



}

export default getWeather;
