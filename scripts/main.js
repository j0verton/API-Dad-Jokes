import { useJoke, getJoke } from "./JokeProvider.js";
import {PunchLine, Joke } from "./Joke.js"

const jokeBtn = document.querySelector(".request-joke-btn");
const punchLineBtn = document.querySelector(".request-punch-btn");

let newJoke

jokeBtn.addEventListener("click", (e) => {
  console.log("I should be grabbing a joke now...")
  // TODO: fetch a joke from the Joke API and render it to the DOM
  getJoke()
  .then(useJoke())
  .then(responseData => {
  newJoke = responseData;
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