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