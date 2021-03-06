let currentDay = moment().format('MM/DD/YYYY');
localStorage.setItem('city', 'Los Angeles');
let city = localStorage.getItem('city');

let displayWeather = function (x) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${x}&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58`
  )
    .then((r) => r.json())
    .then(({ main, wind, name, weather, coord }) => {
      let { lon, lat } = coord;
      let { icon } = weather[0];
      let { temp, humidity } = main;
      let { speed: windSpeed } = wind;

      document.getElementById('cityName').textContent =
        name + '  ' + currentDay;
      document.getElementById(
        'currentIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
      document.getElementById('currentTemp').textContent =
        'Temperature:  ' + temp + ' F';
      document.getElementById('humidity').textContent =
        'Humidity:  ' + humidity + '%';
      document.getElementById('windSpeed').textContent =
        'Wind Speed:  ' + windSpeed + 'mph';

      fetch(
        `https://api.openweathermap.org/data/2.5/uvi?appid=bad2b3e36cb846608fb20772133c3d58&lat=${lat}&lon=${lon}`
      )
        .then((r) => r.json())
        .then(({ value }) => {
          let condition;
          if (value <= 2) {
            condition = 'badge-success';
          } else if (value >= 3 && value <= 7) {
            condition = 'badge-warning';
          } else {
            condition = 'badge-danger';
          }
          document.getElementById(
            'uvIndex'
          ).innerHTML = `<p>UV Index: <span class="badge ${condition}">${value}</span></p>`;
        });
    });
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${x}&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58`
  )
    .then((r) => r.json())
    .then(({ list }) => {
      let dayOneDate = moment().add(1, 'd').format('MM/DD/YYYY');
      let dayOneIcon = list[2].weather[0].icon;
      let dayOneTemp = list[2].main.temp;
      let dayOneHumidity = list[2].main.humidity;
      document.getElementById('dayOneDate').textContent = dayOneDate;
      document.getElementById(
        'dayOneIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${dayOneIcon}.png" alt="Weather Icon">`;
      document.getElementById('dayOneTemp').textContent =
        'Temp:  ' + dayOneTemp + ' F';
      document.getElementById('dayOneHumidity').textContent =
        'Humidity:  ' + dayOneHumidity + ' %';

      let dayTwoDate = moment().add(2, 'd').format('MM/DD/YYYY');
      let dayTwoIcon = list[10].weather[0].icon;
      let dayTwoTemp = list[10].main.temp;
      let dayTwoHumidity = list[10].main.humidity;
      document.getElementById('dayTwoDate').textContent = dayTwoDate;
      document.getElementById(
        'dayTwoIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${dayTwoIcon}.png" alt="Weather Icon">`;
      document.getElementById('dayTwoTemp').textContent =
        'Temp:  ' + dayTwoTemp + ' F';
      document.getElementById('dayTwoHumidity').textContent =
        'Humidity:  ' + dayTwoHumidity + ' %';

      let dayThreeDate = moment().add(3, 'd').format('MM/DD/YYYY');
      let dayThreeIcon = list[18].weather[0].icon;
      let dayThreeTemp = list[18].main.temp;
      let dayThreeHumidity = list[18].main.humidity;
      document.getElementById('dayThreeDate').textContent = dayThreeDate;
      document.getElementById(
        'dayThreeIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${dayThreeIcon}.png" alt="Weather Icon">`;
      document.getElementById('dayThreeTemp').textContent =
        'Temp:  ' + dayThreeTemp + ' F';
      document.getElementById('dayThreeHumidity').textContent =
        'Humidity:  ' + dayThreeHumidity + ' %';

      let dayFourDate = moment().add(4, 'd').format('MM/DD/YYYY');
      let dayFourIcon = list[26].weather[0].icon;
      let dayFourTemp = list[26].main.temp;
      let dayFourHumidity = list[26].main.humidity;
      document.getElementById('dayFourDate').textContent = dayFourDate;
      document.getElementById(
        'dayFourIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${dayFourIcon}.png" alt="Weather Icon">`;
      document.getElementById('dayFourTemp').textContent =
        'Temp:  ' + dayFourTemp + ' F';
      document.getElementById('dayFourHumidity').textContent =
        'Humidity:  ' + dayFourHumidity + ' %';

      let dayFiveDate = moment().add(5, 'd').format('MM/DD/YYYY');
      let dayFiveIcon = list[34].weather[0].icon;
      let dayFiveTemp = list[34].main.temp;
      let dayFiveHumidity = list[34].main.humidity;
      document.getElementById('dayFiveDate').textContent = dayFiveDate;
      document.getElementById(
        'dayFiveIcon'
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${dayFiveIcon}.png" alt="Weather Icon">`;
      document.getElementById('dayFiveTemp').textContent =
        'Temp:  ' + dayFiveTemp + ' F';
      document.getElementById('dayFiveHumidity').textContent =
        'Humidity:  ' + dayFiveHumidity + ' %';

      document.getElementById('city').value = '';
    })
    .catch((e) => console.error);
};

displayWeather(city)

document.getElementById('searchCity').addEventListener('click', (event) => {
  event.preventDefault();

  let cityElem = document.createElement('div');
  cityElem.innerHTML = `
  <div id="cityBtn" class="btn btn-lg btn-block btn-outline-dark text-left"><h2 id="cityList">${
    document.getElementById('city').value
  }</h2></div>
  `;
  document.getElementById('history').append(cityElem);
  city = document.getElementById('city').value;
  displayWeather(city);
});

document.addEventListener('click', (event) => {
  if (event.target.id.includes('cityBtn'))
    city = document.getElementById('cityList').value;
  console.log(city);
  displayWeather(city)
});
