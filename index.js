import { fetchBreedDescription } from './breedFetcher.js';
import chalk from "chalk";

// check if arguments passed are valid
const checkArgs = (args)=>{
  if (args.length > 1) {
    return console.log("Invalid arguments: specify only one word!");
  } else if (args.length < 1) {
    return console.log("Missing arguments: specify a word to search!");
  }else{
    const breedName = args[0];
    //fetch breed descriptions
    fetchBreedDescription(breedName, printDescription)
  }
}

// callback function to run after fetching data
const printDescription = (error, desc) =>{
  if (error) {
    console.log('Error fetch details:', error.message);
  } else {
    if (Object.keys(desc).length === 0) console.log(chalk.red("Nothing found!"))
    for (const cat in desc){
      console.log(`${chalk.yellow('Breed')}: ${chalk.blue(cat)}`);
      console.log(`${chalk.yellow('Description')}: ${desc[cat]}\n`);
    }
  }
}

const args = process.argv.slice(2);
checkArgs(args);

