const dayCodes = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
}

const weather_codes = {
  0: {
    name: "Clear Sky",
    icons: {
      day: "clear.svg",
      night: "clear-night.svg"
    }
  },
  1: {
    name: "Mainly Clear",
    icons: {
      day: "clear.svg",
      night: "clear-night.svg"
    }
  },
  2: {
    name: "Partly Cloudy",
    icons: {
      day: "partly-cloudy.svg",
      night: "partly-cloudy-night.svg"
    }
  },
  3: {
    name: "Overcast",
    icons: {
      day: "overcast.svg",
      night: "overcast.svg"
    }
  },
  45: {
    name: "Fog",
    icons: {
      day: "fog.svg",
      night: "fog-night.svg"
    }
  },
  48: {
    name: "Rime Fog",
    icons: {
      day: "rime-fog.svg",
      night: "rime-fog.svg"
    }
  },
  51: {
    name: "Light Drizzle",
    icons: {
      day: "light-drizzle.svg",
      night: "light-drizzle.svg"
    }
  },
  53: {
    name: "Moderate Drizzle",
    icons: {
      day: "drizzle.svg",
      night: "drizzle.svg"
    }
  },
  55: {
    name: "Heavy Drizzle",
    icons: {
      day: "heavy-drizzle.svg",
      night: "heavy-drizzle.svg"
    }
  },
  56: {
    name: "Light Freezing Drizzle",
    icons: {
      day: "drizzle.svg",
      night: "drizzle.svg"
    }
  },
  57: {
    name: "Dense Freezing Drizzle",
    icons: {
      day: "heavy-drizzle.svg",
      night: "heavy-drizzle.svg"
    }
  },
  61: {
    name: "Slight Rain",
    icons: {
      day: "slight-rain.svg",
      night: "slight-rain-night.svg"
    }
  },
  63: {
    name: "Moderate Rain",
    icons: {
      day: "rain.svg",
      night: "rain.svg"
    }
  },
  65: {
    name: "Heavy Rain",
    icons: {
      day: "heavy-rain.svg",
      night: "heavy-rain.svg"
    }
  },
  66: {
    name: "Light Freezing Rain",
    icons: {
      day: "rain.svg",
      night: "rain.svg"
    }
  },
  67: {
    name: "Heavy Freezing Rain",
    icons: {
      day: "heavy-rain.svg",
      night: "heavy-rain.svg"
    }
  },
  71: {
    name: "Slight snowfall",
    icons: {
      day: "light-snow.svg",
      night: "light-snow-night.svg"
    }
  },
  73: {
    name: "Moderate snowfall",
    icons: {
      day: "snow.svg",
      night: "snow.svg"
    }
  },
  75: {
    name: "Heavy snowfall",
    icons: {
      day: "heavy-snow.svg",
      night: "heavy-snow.svg"
    }
  },
  77: {
    name: "Snow Grains",
    icons: {
      day: "snow-grains.svg",
      night: "snow-grains.svg"
    }
  },
  80: {
    name: "Slight Rain Showers",
    icons: {
      day: "slight-rain-showers.svg",
      night: "slight-rain-showers-night.svg"
    }
  },
  81: {
    name: "Moderate Rain Showers",
    icons: {
      day: "rain-showers.svg",
      night: "rain-showers.svg"
    }
  },
  82: {
    name: "Violent Rain Showers",
    icons: {
      day: "heavy-rain-showers.svg",
      night: "heavy-rain-showers.svg"
    }
  },
  85: {
    name: "Light Snow Showers",
    icons: {
      day: "light-snow-showers.svg",
      night: "light-snow-showers.svg"
    }
  },
  86: {
    name: "Heavy Snow Showers",
    icons: {
      day: "heavy-snow-showers.svg",
      night: "heavy-snow-showers.svg"
    }
  },
  95: {
    name: "Thunderstorm",
    icons: {
      day: "thunderstorm.svg",
      night: "thunderstorm.svg"
    }
  },
  96: {
    name: "Slight Hailstorm",
    icons: {
      day: "hail.svg",
      night: "hail.svg"
    }
  },
  99: {
    name: "Heavy Hailstorm",
    icons: {
      day: "heavy-hail.svg",
      night: "heavy-hail.svg"
    }
  }
};

const searchWeather = document.getElementById("search-input");
const displayLocation = document.getElementById("location");
const temperatureTxt = document.getElementById("temperature");
const whatDay = document.getElementById("day-time");
const temperatureInfo = document.getElementById("temperature-info");
const tempImage = document.getElementById("weather-img");
const humidityText = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const windDirection = document.getElementById("wind-direction");
const windDirectionImage = document.getElementById("wind-direction-image");
const windDirectionInfo = document.getElementById("wind-direction-info");
const humidityImage = document.getElementById("humidity-image");
const humidityInfo = document.getElementById("humidity-info");
const windSpeedInfo = document.getElementById("wind-speed-info");
const windImage = document.getElementById("wind-image");
const rainImage = document.getElementById("rain-image");
const rainText = document.getElementById("rain-text");
const rainInfo = document.getElementById("rain-info");
const weatherDetailsInfoBox = document.getElementById("weather-detailed-info-box");
const weatherDetailsInfo = document.getElementById("weather-detailed-info");
const temperatureMoreInfo = document.getElementById("temperature-more-info");
const weeklyForecastText = document.getElementById("weekly-forecast-text");

const firstDay = document.getElementById("first-day");
const secondDay = document.getElementById("second-day");
const thirdDay = document.getElementById("third-day");
const fourthDay = document.getElementById("fourth-day");
const fifthDay = document.getElementById("fifth-day");
const sixthDay = document.getElementById("sixth-day");

const firstDayImage = document.getElementById("first-day-image");
const secondDayImage = document.getElementById("second-day-image");
const thirdDayImage = document.getElementById("third-day-image");
const fourthDayImage = document.getElementById("fourth-day-image");
const fifthDayImage = document.getElementById("fifth-day-image");
const sixthDayImage = document.getElementById("sixth-day-image");

const firstDayMaximumTemperature = document.getElementById("first-day-maximum-temperature");
const firstDayMinimumTemperature = document.getElementById("first-day-maximum-temperature");

function styleHomePage() {
  tempImage.style.width = '150px';
  tempImage.style.height = '150px';
  tempImage.style.objectFit = 'cover';

  weatherDetailsInfoBox.style.borderRadius = '5px';
 // weatherDetailsInfoBox.style.border = '1px solid rgb(196, 196, 196)';
  weatherDetailsInfoBox.style.backgroundColor = '#ffffff;';
}

function getDayOfTheWeek(data) {
  const d = new Date();
  const dayNumber = d.getDay();
  const hours = d.getHours();
  const minutes = d.getMinutes();

  whatDay.innerHTML = `${dayCodes[dayNumber]}, ` + `${hours}:` + `${minutes}` + ` PM`;

  if (dayCodes[dayNumber] === "Sunday") {
    firstDay.innerHTML = 'Mon';

    //First Day
    data.current.is_day === '1' ? firstDayImage.src = `assets/${weather_codes[data.daily.weather_code[1]].icons.day}` : firstDayImage.src = `assets/${weather_codes[data.daily.weather_code[1]].icons.night}`;


    
  } else if(dayCodes[dayNumber] === "Monday"){
    firstDay.innerHTML = 'Tue';
    
  }else if(dayCodes[dayNumber] === "Tuesday"){
    firstDay.innerHTML = 'Wed';

  }else if(dayCodes[dayNumber] === "Wednesday"){
    firstDay.innerHTML = 'Thu';

  }else if(dayCodes[dayNumber] === "Thursday"){
    firstDay.innerHTML = 'Fri';

  }else if(dayCodes[dayNumber] === "Friday"){
    firstDay.innerHTML = 'Sat';
    
    //First Day
    data.current.is_day === '1' ? firstDayImage.src = `assets/${weather_codes[data.daily.weather_code[1]].icons.day}` : firstDayImage.src = `assets/${weather_codes[data.daily.weather_code[1]].icons.night}`;

    firstDayMaximumTemperature.innerHTML = `${Math.ceil(data.daily.temperature_2m_max[1])}` + `${data.current_units.temperature_2m}`;

  }else if(dayCodes[dayNumber] === "Saturday"){
    firstDay.innerHTML = 'Sun';
  }
}

function searchLocation(value) {

  const searchValue = searchWeather.value;

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchValue}`).then(res => res.json()).then(data => {
    console.log(data.results[0]);
    displayLocation.innerHTML = `${data.results[0].name},${data.results[0].country}`;


    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,rain,precipitation,wind_direction_10m,is_day`).then(res => res.json()).then(data => {
      console.log(data.daily);

      temperatureTxt.innerHTML = `${Math.ceil(data.current.temperature_2m)}` + `${data.current_units.temperature_2m}`;
      temperatureInfo.innerHTML = `${weather_codes[data.current.weather_code].name}`;

      data.current.is_day === '1' ? tempImage.src = `assets/${weather_codes[data.current.weather_code].icons.day}` : tempImage.src = `assets/${weather_codes[data.current.weather_code].icons.night}`;

      /*
      if (data.current.is_day === '1') {
        tempImage.src = `assets/${weather_codes[data.current.weather_code].icons.day}`
      } else if (data.current.is_day === '0') {
        tempImage.src = `assets/${weather_codes[data.current.weather_code].icons.night}`
      }
      */

      weatherDetailsInfo.style.background = 'white';
      tempImage.style.width = '150px';
      tempImage.style.height = '150px';
      tempImage.style.objectFit = 'cover';
      weatherDetailsInfoBox.style.display = 'flex';
      weatherDetailsInfoBox.style.flexDirection = 'column';
      weatherDetailsInfoBox.style.backgroundColor = '#ffffff;';
      weatherDetailsInfoBox.style.justifyContent = 'center';
      weatherDetailsInfoBox.style.alignItems = 'flex-start';
      weatherDetailsInfoBox.style.padding = '15px 0 15px 10px';
      temperatureMoreInfo.style.backgroundColor = 'white';
      


      humidityText.innerHTML = `${data.current.precipitation}%`;

      windSpeed.innerHTML = `${data.current.wind_speed_10m}km/h`;

      const degree = data.current.wind_direction_10m;

      const directions = ["North", "Norht East", "East", "South East", "South", "South West", "West", "North West"];
      const index = Math.round(degree / 45) % 8;
      windDirection.innerHTML = `${directions[index]}`;
      windDirectionImage.src = 'images/icons8-weather-station-wind.gif';
      windDirectionInfo.innerHTML = 'Wind Direction'

      humidityInfo.innerHTML = 'Precipitation';
      humidityImage.src = 'images/icons8-precipitation (1).gif';

      windSpeedInfo.innerHTML = 'Wind Speed';
      windImage.src = 'images/icons8-windsock.gif';

      rainImage.src = 'images/icons8-rain-gauge.gif';
      rainText.innerHTML = `${data.current.rain}` + `${data.current_units.rain}`
      rainInfo.innerHTML = 'Rain';

      weeklyForecastText.innerHTML = '6 Day Forecast';

      getDayOfTheWeek(data);
    })
    
  });
};

function geolocator() {
  if (navigator.geolocation) {
    const myLoc = navigator.geolocation.getCurrentPosition(getLocation);
    console.log(myLoc);
  } else {
    "Your browser doesn't support geolocation API";
  }
}

function getLocation(position) {

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&current=temperature_2m`).then(res => res.json()).then(data => {
    console.log(data);


  })
}

geolocator();

function getWeather(value) {

}





//fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json()).then(response => console.log(response));