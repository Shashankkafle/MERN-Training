function asyncFunction() {
  setTimeout(() => {
    console.log("async function");
  }, 1000);
}

console.log("start");
asyncFunction();
console.log("End");

const weather = getWeather();
console.log(weather);

function getWeather() {
  setTimeout(() => {
    console.log("the weather is sunny");
  }, 2000);
}
