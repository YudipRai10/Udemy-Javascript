// const setTimer = (duration) => {
//   const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done!");
//     }, duration);
//   });

//   return myPromise;
// };

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     (postData) => {
//       setTimer(2000).then(data => {
//         console.log(data, postData)
//       });
//     },
//     error => console.log(error)
//   );
// }

// const btn = document.querySelector("button");
// btn.addEventListener("click", trackUserHandler);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Hello");
  }, 2000);
});

promise.then((res) => console.log(res)).catch((error) => console.error(error));

function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number")
      reject("Inputs must be numbers");
    // setTimeout(() => resolve(a + b), 100);
    resolve(a + b)
  });
}

add(22, 3).then(res => console.log(res));
