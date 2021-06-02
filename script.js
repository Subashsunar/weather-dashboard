// Dynamic Date for top section
let today = moment();
let date = today.format("L");

let result1 = document.getElementById("dateToday");
result1.innerHTML = date;

// Create an input box
var textEl = document.getElementById("text");
// Button to submit search
var submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", cityData);

// API call to get the expected data
var apiKey = "8cb9a21db1dc585b11d339009fa50cfe";
var lat;
var lon;
fetch(
  `http://api.openweathermap.org/geo/1.0/direct?limit=5&q=${textEl.value}&units=metric&appid=${apiKey}`
);
function cityData() {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?limit=5&q=${textEl.value}&units=metric&appid=${apiKey}`
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (dataResult) {
      console.log(dataResult);
      lat = dataResult[0].lat;
      lon = dataResult[0].lon;
      weatherData();
    });
}

function weatherData() {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`
  )
    .then(function (result) {
      return result.json();
    })
    .then(function (dataResult) {
      console.log(dataResult);
    });
}
