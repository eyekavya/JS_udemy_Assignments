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

const funKavya = (a, b) => console.log(a, b);

function percentageOfWorld1(population) {
  return population / 79;
}

const perChina = percentageOfWorld1(1441);
const perIndia = percentageOfWorld1(1406);
const perUsa = percentageOfWorld1(334);
console.log(perChina, perIndia, perUsa);

const percentageOfWorld2 = function (population) {
  return population / 79;
};

const perChina2 = percentageOfWorld2(1441);
const perIndia2 = percentageOfWorld2(1406);
const perUsa2 = percentageOfWorld2(334);
console.log(perChina2, perIndia2, perUsa2);

const percentageOfWorld3 = (population) => population / 79;
const perChina3 = percentageOfWorld3(1441);
const perIndia3 = percentageOfWorld3(1406);
const perUsa3 = percentageOfWorld3(334);
console.log(perChina3, perIndia3, perUsa3);

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
}
console.log(
  describePopulation("India", 1406),
  describePopulation("China", 1441),
  describePopulation("USA", 334)
);

const populations = [1.39, 3, 0.22, 0.5];
console.log(populations);

console.log(populations.length === 4 ? true : false);

const percentages = [];

for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i] * 1000));
}
console.log(percentages);
const neighbours = ["Nepal", "China", "Bangladesh", "Srilanka"];
neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (neighbours.includes("Germany")) console.log("Germany included");
else console.log("Germany not included");

if (neighbours.includes("Germany") === false)
  console.log("Probably not a central European country :D");

neighbours[neighbours.indexOf("China")] = "Bhutan";
console.log(neighbours);

const myCountry = {
  country: "India",
  capital: "New Delhi",
  language: "Hindi",
  population: 139,
  neighbours: ["Nepal", "China", "Bangladesh", "Srilanka"],
  describe: function () {
    return console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people;${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};
myCountry.checkIsland();

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people;${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

console.log(myCountry.population + 2);

console.log(myCountry.population - 2);

myCountry.describe();

for (let voter = 1; voter <= 50; voter++) {
  console.log(`Voter number ${voter} is currently voting`);
}
