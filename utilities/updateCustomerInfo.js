import inquirer from "inquirer";
import { readFile } from "fs/promises";
import fs from "fs";

const customer_data = JSON.parse(
  await readFile(new URL("../data/customer.json", import.meta.url))
);

export function updateCustomerInfo() {
  // need to add field validation
  const customerInfoQuestions = [
    {
      type: "input",
      name: "firstName",
      message: "Please enter your first name: ",
    },
    {
      type: "input",
      name: "lastName",
      message: "Please enter your last name: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email address: ",
    },
    {
      type: "input",
      name: "phone",
      message: "Please enter your phone number: ",
    },
  ];

  inquirer.prompt(customerInfoQuestions).then((answers) => {
    const updateData = {
      customerInfo: {
        containsInfo: true,
        firstName: answers.firstName,
        lastName: answers.lastName,
        email: answers.email,
        phone: answers.phone,
        address: {
          containsInfo: customer_data.customerInfo.address.containsInfo,
          street: customer_data.customerInfo.address.street,
          unitNumber: customer_data.customerInfo.address.unitNumber,
          city: customer_data.customerInfo.address.city,
          state: customer_data.customerInfo.address.state,
          postalCode: customer_data.customerInfo.address.postalCode,
          deliveryInstructions:
            customer_data.customerInfo.address.deliveryInstructions,
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
