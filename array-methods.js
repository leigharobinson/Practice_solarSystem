console.log("nice momentum");

const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
];

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

planets.forEach((planet) => {
  planetEl.innerHTML += `
    <h3> Planet Name: ${planet}</h3>
    `;
});
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
//Where I found my solution
//https://paulund.co.uk/how-to-capitalize-the-first-letter-of-a-string-in-javascript
const Planets = planets.map((planet) => ({
  planetName: planet.charAt(0).toUpperCase() + planet.slice(1),
}));

Planets.forEach((planet) => {
  planetEl.innerHTML += `
    <h3>Planet Name: ${planet.planetName}</h3>
    `;
});

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
const planetz = document.getElementById("planetz");
const Planetz = planets.filter((planet) => planet.includes("e"));

Planetz.forEach((planet) => {
  planetz.innerHTML += `
    <h3>Planet Name ${planet}</h3>`;
});
