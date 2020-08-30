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
import {PunchLine, Joke, KnockJoke } from "./Joke.js"

const jokeBtn = document.querySelector(".request-joke-btn");
const punchLineBtn = document.querySelector(".request-punch-btn");

let newJoke
let punchTarget = document.querySelector(".joke-punchline")
jokeBtn.addEventListener("click", (e) => {
  punchTarget.innerHTML = ""
  console.log("I should be grabbing a joke now...");
  // TODO: fetch a joke from the Joke API and render it to the DOM
  let jokeType = document.querySelector("#type-selector").value;
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

  if (newJoke.type === "knock-knock") {
    // debugger;
    console.log(punchLineBtn)
    punchLineBtn.style.display = "none"
    console.log(punchLineBtn)
    let jokeHTML=KnockJoke(newJoke);
    let jokeTarget = document.querySelector(".joke-setup")
    jokeTarget.innerHTML =jokeHTML;
  } else {
    let jokeHTML=Joke(newJoke);
    let jokeTarget = document.querySelector(".joke-setup")
    jokeTarget.innerHTML =jokeHTML;
  }
  }); 
});

punchLineBtn.addEventListener("click", (e) => {
  let jokeClass = document.querySelector("#type-selector").value
  console.log(jokeClass)
  if (jokeClass.getAttribute("class") === "chaos") {
    console.log("joke prechange",newJoke)
    getJoke("")
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
      console.log("joke post-change",newJoke)
    });




    let punchHTML=PunchLine(newJoke);
    punchTarget.innerHTML = punchHTML;
  } else {

    let punchHTML=PunchLine(newJoke);
    punchTarget.innerHTML = punchHTML;
  }
});

let whosThereBtn = document.querySelector(".whos-there-btn") 
whosThereBtn.addEventListener("click", (e) => {
  t1 = document.querySelector(".line-three")
  t2 = document.querySelector(".who")
  t1.style.display = ""
  t2.style.display = ""
});