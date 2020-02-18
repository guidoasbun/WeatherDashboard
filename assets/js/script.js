let currentDay = moment().format("MM/DD/YYYY")

let cityList = ['Newport Beach', 'Irvine']
console.log(cityList)
// localStorage.getItem('city', cityList)



  function renderList () {
    document.getElementById('cityHistory').innerHTML = ''
    for (i = 0; i < cityList.length; i++) {
      let cityElem = document.createElement('div')
      cityElem.innerHTML = `
    <div class="alert alert-secondary cityInList" value="${cityList[i]}"role="alert" >
      ${cityList[i]}
    </div>
    `
      document.getElementById('cityHistory').append(cityElem)
    }


  } 
 
  renderList()

  document.getElementById('addCity').addEventListener('click', event => {
  event.preventDefault()
  
    cityList.push(document.getElementById('city').value)
    console.log(cityList)
    
    renderList()
})

  // localStorage.setItem('city', cityList)

   document.addEventListener('click', function (event){
     event.preventDefault()
    if (event.target.classList.contains('cityInList')){
      const hotDog = event.target
      console.log(hotDog)
    
    // console.log(event.target)
    }
  })