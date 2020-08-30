import { useJoke, getJoke } from "./JokeProvider.js";
import {PunchLine, Joke, KnockJoke } from "./Joke.js"

const jokeBtn = document.querySelector(".request-joke-btn");
const punchLineBtn = document.querySelector(".request-punch-btn");

let newJoke
let punchTarget = document.querySelector(".joke-punchline")


jokeBtn.addEventListener("click", (e) => {
  punchTarget.innerHTML = ""
  console.log("I should be grabbing a joke now...");
  let jokeTarget = document.querySelector(".joke-setup")
  jokeTarget.style.display = ""
  punchLineBtn.style.display = ""
  // TODO: fetch a joke from the Joke API and render it to the DOM
  let jokeType = document.querySelector("#type-selector").value;
  if (jokeType !== "surrealist") {
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

    console.log("joke", newJoke)
    let jokeHTML=Joke(newJoke);
    let jokeTarget = document.querySelector(".joke-setup")
    jokeTarget.innerHTML =jokeHTML;

    if (newJoke.type === "knock-knock") {
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
  } else {
    jokeType = ""
    console.log (jokeType)
    getJoke(jokeType)
    .then(useJoke())
    .then(response => {
      let jokeData = response;
      if (Array.isArray(jokeData)){
        newJoke = jokeData[0]
      } else {
        newJoke = jokeData
      }
      console.log("joke", newJoke)
      let jokeHTML=Joke(newJoke);
      let jokeTarget = document.querySelector(".joke-setup")
      jokeTarget.innerHTML =jokeHTML;
      getJoke(jokeType)
      .then(useJoke())
      .then(response => {
        let jokeData = response;
        if (Array.isArray(jokeData)){
          newJoke = jokeData[0]
        } else {
          newJoke = jokeData
        }
      });
    });
  }
});


let whosThereBtn = document.querySelector(".whos-there-btn") 
whosThereBtn.addEventListener("click", (e) => {
  let t1 = document.querySelector(".line-three")
  let t2 = document.querySelector(".who")
  t1.style.display = ""
  t2.style.display = ""
  whosThereBtn.style.display="none"
  document.getElementById('knock').style.display = 'none'
  let whoBtn = document.querySelector(".who") 
  whoBtn.addEventListener("click", (e) => {
     t1.style.display = "none"
    t2.style.display = "none"
    let punchHTML=PunchLine(newJoke);
    punchTarget.innerHTML = punchHTML;
  });
});

punchLineBtn.addEventListener("click", (e) => {
  let jokeClass = document.querySelector("#type-selector").value  
  
  // if (jokeClass.getAttribute("class").value === "chaos") {
  //   console.log("joke prechange",newJoke)
  //   getJoke("")
  //   .then(useJoke())
    
  //   .then(response => {
  //     let jokeData = response;
  //     if (Array.isArray(jokeData)){
  //       newJoke = jokeData[0]
  //     } else {
  //       newJoke = jokeData
  //     }
  //     console.log("joke post-change",newJoke)
  //   });

  //   let punchHTML=PunchLine(newJoke);
  //   punchTarget.innerHTML = punchHTML;


  // } else {
    document.querySelector(".joke-setup").style.display ="none"
    punchLineBtn.style.display = "none"
    let punchHTML=PunchLine(newJoke);
    punchTarget.innerHTML = punchHTML;
// }
});
