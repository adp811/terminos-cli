import inquirer from "inquirer";
import fs from "fs";

export function updatePaymentInfo() {
  //need to add field validation
  const paymentInfoQuestions = [
    {
      type: "input",
      name: "number",
      message: "Please enter your card's number: ",
    },
    {
      type: "input",
      name: "expiration",
      message: "Please enter your card's expiration date: ",
      default: "MM/YY",
    },
    {
      type: "input",
      name: "securityCode",
      message: "Please enter your card's security code: ",
    },
    {
      type: "input",
      name: "postalCode",
      message: "Please enter your 5 digit zip code: ",
    },
  ];

  inquirer.prompt(paymentInfoQuestions).then((answers) => {
    const updateData = {
      paymentInfo: {
        containsInfo: true,
        number: answers.number,
        expiration: answers.expiration,
        securityCode: answers.securityCode,
        postalCode: answers.postalCode,
      },
    };

    fs.writeFileSync(
      "./data/payment.json",
      JSON.stringify(updateData, null, 2),
      (err) => {
        if (err) console.log(err);
      }
    );
  });
}
