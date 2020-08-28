// import { useJoke, getJoke } from "./JokeProvider.js";
// import {PunchLine, Joke } from "./Joke.js"

// const jokeBtn = document.querySelector(".request-joke-btn");
// const punchLineBtn = document.querySelector(".request-punch-btn");

// let newJoke
// let jokeType = document.querySelector("#type-selector").value;

// jokeBtn.addEventListener("click", (e) => {
//   console.log("I should be grabbing a joke now...")
//   // TODO: fetch a joke from the Joke API and render it to the DOM
  
//   //using drop-down menu to select joke type 
//   getJoke(jokeType)
//   .then(useJoke())
//   .then(responseData => {
//   newJoke = responseData;
//   let jokeHTML=Joke(newJoke);
//   let jokeTarget = document.querySelector(".joke-setup")
//   jokeTarget.innerHTML = jokeHTML;
//   }); 
// });

// punchLineBtn.addEventListener("click", (e) => {
//   let punchHTML=PunchLine(newJoke);
//   let punchTarget = document.querySelector(".joke-punchline")
//   punchTarget.innerHTML = punchHTML;
// });


import { useJoke, getJoke } from "./JokeProvider.js";
import {PunchLine, Joke } from "./Joke.js"

const jokeBtn = document.querySelector(".request-joke-btn");
const punchLineBtn = document.querySelector(".request-punch-btn");

let newJoke

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  let jokeType = document.querySelector("#type-selector").value;
  console.log(jokeType)
  getJoke(jokeType)
  .then(useJoke())
  .then(response => {
  let jokeData = response;

  //I had to insert this logic because when i specify a joke type the api returns 
  //an array with the joke object in it, but if i dont specify it just returns an object
  if (Array.isArray(jokeData)){
    newJoke = jokeData[0]
  } else {
    newJoke = jokeData
  }

  let jokeHTML=Joke(newJoke);
  let jokeTarget = document.querySelector(".joke-setup")
  jokeTarget.innerHTML =jokeHTML;
  }); 
});

punchLineBtn.addEventListener("click", (e) => {
  let punchHTML=PunchLine(newJoke);
  let punchTarget = document.querySelector(".joke-punchline")
  punchTarget.innerHTML = punchHTML;
}); 