import { Command } from "commander";
import { addItemToOrder, showOrder } from "./index.js";

const program = new Command();

// prettier-ignore
program
    .command('start')
    .description('Start a new Dominos order!')
    .action(() => {

    });

// prettier-ignore
program
    .command('update payment')
    .description('Update your payment information!')
    .action(() => {
  
    });

// prettier-ignore
program
    .command('update address')
    .description('Update your delivery address!')
    .action(() => {
 
    });

// prettier-ignore
program
    .command('update customer info')
    .description('Update your customer information!')
    .action(() => {

    });

// prettier-ignore
program
    .version("1.0.0")
    .description("CLI tool for ordering Dominos!");

program.parse(process.argv);
