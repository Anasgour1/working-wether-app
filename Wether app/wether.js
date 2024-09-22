const apiKey = "e3460f0b0d5fa52b5e9d76781ff4c818";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathricon = document.querySelector(".weathricon");

async function checkWether(city) {
    const response = await fetch(apiUrl +  city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    }  else {
        var data = await response.json();

        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds") {
           weathricon.src = "clouds.png";
    
    
        } else if(data.weather[0].main == "Clear") {
            weathricon.src = "clear.png";
    
    
        }  else if(data.weather[0].main == "Rain") {
            weathricon.src = "rain.png";
    
    } else if(data.weather[0].main == "Drizzle") {
        weathricon.src = "drizzle.png";
    
    } else if(data.weather[0].main == "Mist") {
        weathricon.src = "mist.png";
    }
    
    document.querySelector(".weather").style.display = "block";
          document.querySelector(".error").style.display = "none";

    }


    
}
searchBtn.addEventListener("click", () => {
    checkWether(searchBox.value);
});

checkWether();