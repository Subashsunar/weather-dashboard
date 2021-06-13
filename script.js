// Dynamic Date for top section

const today = moment();
const date = today.format("L");
const userInputedCity = document.getElementById('userInputCity');

// const icon = document.getElementById('weather-icon0')
// const icon = dataResult.weather[0];

const temp = document.getElementById('temp-m1');
const wind = document.getElementById('wind-m1');
const humidityEl = document.getElementById('humidity-m1');
const indexEl = document.getElementById('index-m1');

const temp1 = document.getElementById('temp-0');
const wind1 = document.getElementById('wind-0');
const humidityEl1 = document.getElementById('humidity-0');
const indexEl1 = document.getElementById('index-0');

const temp2 = document.getElementById('temp-1');
const wind2 = document.getElementById('wind-1');
const humidityEl2 = document.getElementById('humidity-1');
const indexEl2 = document.getElementById('index-1');

const temp3 = document.getElementById('temp-2');
const wind3 = document.getElementById('wind-2');
const humidityEl3 = document.getElementById('humidity-2');
const indexEl3 = document.getElementById('index-2');

const temp4 = document.getElementById('temp-3');
const wind4 = document.getElementById('wind-3');
const humidityEl4 = document.getElementById('humidity-3');
const indexEl4 = document.getElementById('index-3');

const temp5 = document.getElementById('temp-4');
const wind5 = document.getElementById('wind-4');
const humidityEl5 = document.getElementById('humidity-4');
const indexEl5 = document.getElementById('index-4');

let result1 = document.getElementById("dateToday");
result1.innerHTML = date;

const date1 = today.format('L');
console.log(date1);
let result2 = document.getElementById("dateToday1");
result2.innerHTML = date1;

// Create an input box
var textEl = document.getElementById("text");
// Button to submit search
var submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", cityData);

// API call to get the expected data
var apiKey = "8cb9a21db1dc585b11d339009fa50cfe";
var lat;
var lon;
// fetch(
//   `http://api.openweathermap.org/geo/1.0/direct?limit=5&q=${textEl.value}&units=metric&appid=${apiKey}`
// );
function cityData() {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?limit=5&q=${textEl.value}&units=metric&appid=${apiKey}`
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (dataResult) {
      console.log(dataResult);
      userInputedCity.textContent = dataResult[0].name;

      lat = dataResult[0].lat;
      lon = dataResult[0].lon;
      weatherData();
    });
}

function weatherData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=imperial`
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (dataResult) {
      console.log(dataResult);

      // document.querySelector('.icon').src = "https://openweathermap.org/img/wn/" + icon + ".png";
      // document.querySelector('.description').innerHTML = description;

      temp.textContent = 'Temp: ' + dataResult.current.temp;
      wind.textContent = 'Wind: ' + dataResult.current.wind_speed + ' m/s';
      humidityEl.textContent =  'Humidity: ' + dataResult.current.humidity;
      indexEl.textContent = 'UV Index: ' + dataResult.current.uvi;

      temp1.textContent = 'Temp: ' + dataResult.daily[1].temp.max;
      wind1.textContent = 'Wind: ' + dataResult.daily[1].wind_speed + ' m/s';
      humidityEl1.textContent =  'Humidity: ' + dataResult.daily[1].humidity;
      indexEl1.textContent = 'UV Index: ' + dataResult.daily[1].uvi;

      temp2.textContent = 'Temp: ' + dataResult.daily[2].temp.max;
      wind2.textContent = 'Wind: ' + dataResult.daily[2].wind_speed + ' m/s';
      humidityEl2.textContent =  'Humidity: ' + dataResult.daily[2].humidity;
      indexEl2.textContent = 'UV Index: ' + dataResult.daily[2].uvi;

      temp3.textContent = 'Temp: ' + dataResult.daily[3].temp.max;
      wind3.textContent = 'Wind: ' + dataResult.daily[3].wind_speed + ' m/s';
      humidityEl3.textContent =  'Humidity: ' + dataResult.daily[3].humidity;
      indexEl3.textContent = 'UV Index: ' + dataResult.daily[3].uvi;

      temp4.textContent = 'Temp: ' + dataResult.daily[4].temp.max;
      wind4.textContent = 'Wind: ' + dataResult.daily[4].wind_speed + ' m/s';
      humidityEl4.textContent =  'Humidity: ' + dataResult.daily[4].humidity;
      indexEl4.textContent = 'UV Index: ' + dataResult.daily[4].uvi;

      temp5.textContent = 'Temp: ' + dataResult.daily[5].temp.max;
      wind5.textContent = 'Wind: ' + dataResult.daily[5].wind_speed + ' m/s';
      humidityEl5.textContent =  'Humidity: ' + dataResult.daily[5].humidity;
      indexEl5.textContent = 'UV Index: ' + dataResult.daily[5].uvi;
    });
}
