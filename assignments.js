/*const country = "India";
const continent = "Asia";
let population = 100000000;
console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = "Hindi";
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof typeof language);*/

// language = "English";

/*const halfPopulation = population / 2;
console.log(halfPopulation);
console.log(++population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const avgPopulation = 33000000;
console.log(population < avgPopulation);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

const descriptionNew = `Portugal is in Europe, and its 11 million people speak portuguese`;*/

// population = 13000000;

/*if (population > 33000000) {
  console.log(`India's population is above average`);
} else {
  console.log(
    `India's population is ${
      (population - 33000000) / 1000000
    } million bellow average`
  );
}*/

/*console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
);*/

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) console.log("Only 1 border!");
// else if (numNeighbours > 1) console.log("More than 1 border");
// else console.log("No borders");

// population = 10000;

/*if (language === "English" && population < 5000000 && isIsland === false)
  console.log("You should live in India :)");
else console.log("India does not meet your criteria:(");

switch (language) {
  case "Chinese" || "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}*/

/*console.log(
  (averagePopulation =
    population > 33000000
      ? `India's population is above average`
      : `India's population is below average`)
);*/

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its
  capital city is ${capitalCity}`;
}

const describeIndia = describeCountry("India", 1393, "New Delhi");
const describeFinland = describeCountry("Finland", 6, "Helsinki");
const describeChina = describeCountry("China", 1441, "Beijing");

console.log(describeIndia, describeFinland, describeChina);
