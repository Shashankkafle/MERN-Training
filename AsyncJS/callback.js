// const names = ["james", "jess", "lily", "sevy"];

// names.forEach((name) => {
//   console.log(name);
// });

// const myForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     cb(element);
//   }
// };

// myForEach(names, (name) => {
//   console.log(name);
// });

// handling async using callback
getWeather(displayWeather);

function displayWeather(data) {
  console.log(`******* The weather today is ${data} *************`);
}

function getWeather(callback) {
  setTimeout(() => {
    callback("sunny");
  }, 5000);
}

// const loadPokemon = (id, cb) => {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`HTTP error! Status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       cb(data);
//     })
//     .catch((error) => {
//       console.error("Error loading Pokemon:", error);
//     });
// };

// loadPokemon(56, (pokemon) => {
//   console.log(pokemon);
// });
