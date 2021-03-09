const city = document.querySelector('.city')
const country = document.querySelector('.country')
const btnSubmit = document.querySelector('.submit')
const form = document.querySelector('.weather-form')
const temperature = document.querySelector('.temperature')
const nameCity = document.querySelector('.city-name')
const weatherImg = document.querySelector('.weather-img')
const speed = document.querySelector('.speed')

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault()

  const params = {
    access_key: 'b863db502d98247346256106b8ba49a0',
    query: `${city.value}, ${country.value}`,
  }

  axios.get('http://api.weatherstack.com/current', { params })
    .then((response) => {
      const apiResponse = response.data
      weatherImg.src = `${apiResponse.current.weather_icons}`
      temperature.innerHTML = `${apiResponse.current.temperature}℃`
      nameCity.innerHTML = `${apiResponse.location.name}, ${apiResponse.location.country}`
      speed.innerHTML = `Speed: ${apiResponse.current.wind_speed} km/h`
    }).catch((error) => {
      console.log(error)
    })

  form.reset()
})
