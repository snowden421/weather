// create a function to store city search terms using localStorage
function pastCity(city) {
    localStorage.setItem("city-name", city);
    
    var cityStorage = document.createElement ("button");
    cityStorage.setAttribute("class", "pastCity form-control");
    cityStorage.setAttribute("id",city);
    var pastCityResults = document.querySelector("#search");
    pastCityResults.appendChild(cityStorage);
    cityStorage.innerHTML=city;
  };