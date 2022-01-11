// DOM
const personCount = document.getElementById("persons");
const planetsCount = document.getElementById("planets");
const vehiclesCount = document.getElementById("vehicles");
const shipsCount = document.getElementById("ships");

function getSwapi(param) {
  return axios.get(`https://swapi.dev/api/${param}`);
}

function fillCount(){
Promise.all([
  getSwapi("people/"),
  getSwapi("planets/"),
  getSwapi("vehicles/"),
  getSwapi("starships/"),
])
  .then(function (results) {
    personCount.innerHTML = results[0].data.count;
    planetsCount.innerHTML = results[1].data.count;
    vehiclesCount.innerHTML = results[2].data.count;
    shipsCount.innerHTML = results[3].data.count;
    
    console.log(results);
  });

}

fillCount()