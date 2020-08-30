// Define and export a function called Joke.
// It should accept a joke object as a parameter and return an html string
export const Joke = (joke) => {
    return `
        <h2>${joke.setup}</h2>
    `
}  

export const PunchLine = (joke) => {
    return `
        <h2>${joke.punchline}</h2>
    `
}  
 
export const KnockJoke = (joke) =>  {
    let lineThreeOn = joke.setup.slice(28)
    let lineThree = lineThreeOn.substring(0, lineThreeOn.indexOf('.'))
    console.log(lineThreeOn, lineThree)
    return `
    <h2>Knock knock.</h2>
    <button class="whos-there-btn">Who's there?</button>
    <h2 class="line-three" style="display:none">${lineThree}.</h2>
    <button class="who"  style="display:none">${lineThree} who?</button>

`
}

// var s = '/Controller/Action?id=11112&value=4444';
// s = s.substring(0, s.indexOf('?'));
// document.write(s);