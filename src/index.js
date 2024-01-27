function searchCity(city){
    let apiKey = "o494a3dd60ae3ea54b6f5fbebb05t362";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}& units=metric`;
    console.log(apiUrl);
}





function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
