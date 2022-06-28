const country = "India";
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
console.log(typeof typeof language);

// language = "English";

const halfPopulation = population / 2;
console.log(halfPopulation);
console.log(++population);

const populationFinland = 6000000;
console.log(population > populationFinland);

const avgPopulation = 33000000;
console.log(population < avgPopulation);

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

const descriptionNew = `Portugal is in Europe, and its 11 million people speak portuguese`;

// population = 13000000;

if (population > 33000000) {
  console.log(`India's population is above average`);
} else {
  console.log(
    `India's population is ${
      (population - 33000000) / 1000000
    } million bellow average`
  );
}

console.log(
  "9" - "5",
  "19" - "13" + "17",
  "19" - "13" + 17,
  "123" < 57,
  5 + 6 + "4" + 9 - 4 - 2
);
