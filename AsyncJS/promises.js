let myPromise = new Promise((datafetched, reject) => {
  // let success = true; // Change this to false to simulate failure
  // if (success) {
  //   datafetched("Operation was successful!");
  // } else {
  //   reject("Operation failed!");
  // }
  setTimeout(() => {
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed!");
    }
  }, 2000);
});
let promiseGetter = myPromise;
console.log("start");
function successfulCall(message) {
  console.log("this is themessage form promise", message);
}
console.log(promiseGetter);
promiseGetter
  .then((message) => {
    console.log("this is themessage form promise", message); // This will run if the promise is resolved
  })
  .catch((error) => {
    console.error(error); // This will run if the promise is rejected
  });

console.log("end");

// function getWeather() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("Rainy");
//     }, 100);
//   });
// }

// function getWeatherIcon(weather) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       switch (weather) {
//         case "Sunny":
//           resolve("☀️"); // Placeholder icon for Sunny
//           break;
//         case "Cloudy":
//           resolve("☁️"); // Placeholder icon for Cloudy
//           break;
//         case "Rainy":
//           resolve("🌧️"); // Placeholder icon for Rainy
//           break;
//         default:
//           reject("NO ICON FOUND");
//       }
//     }, 100);
//   });
// }

// function onSuccess(data) {
//   console.log(`Success: ${data}`);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }

// getWeather().then(getWeatherIcon).then(onSuccess, onError).catch(onError);

// // getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);
