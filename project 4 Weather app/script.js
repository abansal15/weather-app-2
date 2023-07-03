// Jai shree ram
async function fetchData(city) {
    cityname.innerHTML = city
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a361703746msh21ac5241b9ee504p19f997jsn09a0e103c493',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);

      cloud_pct.innerHTML = result.cloud_pct
      temp.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = result.wind_speed;
      wind_degrees.innerHTML = result.wind_degrees;
      sunrise.innerHTML = result.sunrise;
      sunset.innerHTML = result.sunset;
    } catch (error) {
      console.error(error);
    }
  }
  
  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    fetchData(city.value);
  })
  fetchData("Delhi");
  