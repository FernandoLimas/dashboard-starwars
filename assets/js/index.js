const URL = "https://swapi.dev/api/people/1/";

fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data));
  
console.log('ok');