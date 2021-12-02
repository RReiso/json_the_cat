import request from "request";
import chalk from "chalk";
const searchURL = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchDescription = (args) =>{
  if (args.length > 1) {
    return console.log("Invalid arguments: specify only a breed");
  } else if (args.length < 1) {
    return console.log("Missing arguments: specify a cat breed!");
  }

  const [breed] = args;
  request(`${searchURL}${breed}`, (error, response) => {
    if (!error) {
      const cats = JSON.parse(response.body);
      if (cats.length === 0) return console.log(chalk.red("Nothing found!"))
      for (let cat of cats) {
        console.log(`${chalk.yellow('Breed')}: ${chalk.blue(cat.name)}`);
        console.log(`${chalk.yellow('Description')}: ${cat.description}\n`);
      }
    } else {
      console.log('There was an error:', error.message);
    }
  });
};

const args = process.argv;
fetchDescription(args.slice(2));
