import inquirer from "inquirer";
import { readFile } from "fs/promises";
import fs from "fs";

const customer_data = JSON.parse(
  await readFile(new URL("../data/customer.json", import.meta.url))
);

export function updateAddressInfo() {
  // need to add field validation
  const customerAddressQuestions = [
    {
      type: "input",
      name: "street",
      message: "Please enter your street address: ",
    },
    {
      type: "input",
      name: "unitNumber",
      message: "Please enter your unit number if applicable: ",
    },
    {
      type: "input",
      name: "city",
      message: "Please enter your city: ",
    },
    {
      type: "input",
      name: "state",
      message: "Please enter your state: ",
      default: "NJ",
    },
    {
      type: "input",
      name: "postalCode",
      message: "Please enter your 5 digit zip code: ",
    },
    {
      type: "input",
      name: "deliveryInstructions",
      message:
        "Enter any delivery intructions you may want your driver to know: ",
    },
  ];

  inquirer.prompt(customerAddressQuestions).then((answers) => {
    const updateData = {
      customerInfo: {
        containsInfo: customer_data.customerInfo.containsInfo,
        firstName: customer_data.customerInfo.firstName,
        lastName: customer_data.customerInfo.lastName,
        email: customer_data.customerInfo.email,
        phone: customer_data.customerInfo.phone,
        address: {
          containsInfo: true,
          street: answers.street,
          unitNumber: answers.unitNumber,
          city: answers.city,
          state: answers.state,
          postalCode: answers.postalCode,
          deliveryInstructions: answers.deliveryInstructions,
        },
      },
    };

    fs.writeFileSync(
      "./data/customer.json",
      JSON.stringify(updateData, null, 2),
      (err) => {
        if (err) console.log(err);
      }
    );
  });
}
