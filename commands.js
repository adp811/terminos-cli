import { Command } from "commander";
import { updatePaymentInfo } from "./utilities/updatePaymentInfo.js";
import { updateCustomerInfo } from "./utilities/updateCustomerInfo.js";
import { updateAddressInfo } from "./utilities/updateAddressInfo.js";

const program = new Command();

// prettier-ignore
program
    .command('start')
    .description('Start a new Dominos order!')
    .action(() => {

    });

// prettier-ignore
program
    .command('payment')
    .description('Update your payment information!')
    .action(() => {
        updatePaymentInfo();
        console.log("payment information updated successfully!");
    });

// prettier-ignore
program
    .command('address')
    .description('Update your delivery address!')
    .action(() => {
        updateAddressInfo();
        console.log("address information updated successfully!");
    });

// prettier-ignore
program
    .command('customer')
    .description('Update your customer information!')
    .action(() => {
        updateCustomerInfo();
        console.log("customer information updated successfully!");
    });

// prettier-ignore
program
    .version("1.0.0")
    .description("CLI tool for ordering Dominos!");

program.parse(process.argv);
