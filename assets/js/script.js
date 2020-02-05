let currentDay = moment().format("MM/DD/YYYY")
let currentDayUnixSeconds = moment().unix(Number)
console.log(currentDayUnixSeconds)


fetch('http://api.openweathermap.org/data/2.5/weather?q=costa mesa&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58')
  .then(r => r.json())
  .then(({ main, wind, name, weather}) => {

    let {temp, humidity} = main
    let {speed:windSpeed} = wind
    
    document.getElementById('cityName').textContent = (name + '  ' + currentDay)
    document.getElementById('currentTemp').textContent = ('Temperature:  ' + temp + " F")
    document.getElementById('humidity').textContent = ('Humidity:  ' + humidity +'%')
    document.getElementById('windSpeed').textContent = ('Wind Speed:  ' + windSpeed +'mph')
  })
  .catch( e => console.error)
  

// fetch('http://api.openweathermap.org/data/2.5/forecast?q=costa mesa&units=imperial&APPID=bad2b3e36cb846608fb20772133c3d58')
//   .then(r => r.json())
//   .then(({list, city}) =>{
//     let tomorowWeather = list[7]

//     console.log(tomorowWeather)
//   })
 



  .catch( e => console.error)