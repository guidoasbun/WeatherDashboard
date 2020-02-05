let currentDay = moment().format("MM/DD/YYYY")
let currentDayUnixSeconds = moment().unix(Number)
console.log(currentDayUnixSeconds)


document.getElementById('searchCity').addEventListener('click', event => {
  event.preventDefault()

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementById('city').value}&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58`)
  .then(r => r.json())
  .then(({ main, wind, name, weather, coord}) => {

    let {lon, lat} = coord
    let {icon} = weather[0]
    let {temp, humidity} = main
    let {speed:windSpeed} = wind

    document.getElementById('cityName').textContent = (name + '  ' + currentDay)
    document.getElementById('currentIcon').innerHTML = (`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`)
    document.getElementById('currentTemp').textContent = ('Temperature:  ' + temp + " F")
    document.getElementById('humidity').textContent = ('Humidity:  ' + humidity +'%')
    document.getElementById('windSpeed').textContent = ('Wind Speed:  ' + windSpeed +'mph')

    fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=bad2b3e36cb846608fb20772133c3d58&lat=${lat}&lon=${lon}`)
      .then(r => r.json())
      .then(({value}) => {
        document.getElementById('uvIndex').textContent = ('UV Index:  ' + value)
      })

    

  })
  .catch( e => console.error)



})

  
  

// fetch('http://api.openweathermap.org/data/2.5/forecast?q=costa mesa&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58')
//   .then(r => r.json())
//   .then(({list, city}) =>{
//     let tomorowWeather = list[7]

//     console.log(tomorowWeather)
//   })
 



  .catch( e => console.error)