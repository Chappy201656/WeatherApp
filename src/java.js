let form = document.querySelector("#searchBar");
form.addEventListener("submit", search);

let currentTime = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = days[currentTime.getDay()];
let currentHour = currentTime.getHours();
let currentMinute = currentTime.getMinutes();
theDate.innerHTML = `${currentDay}, ${currentHour}:${currentMinute}`;

function search(event) {
  let city = document.querySelector("#searchValue").value;
  let apiKey = "d884cac1072839b218cdfaea7f702c14";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response.data);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}
