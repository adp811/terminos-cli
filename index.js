import { Order, Customer, Item } from "dominos";
import fs from "fs";

updatePaymentInfo();
updateCustomerInfo();

export function startNewOrder() {}
export function updatePaymentInfo() {
  // NOTES:
  // use inquirer to get all payment information then use it to create new updateData object
  // then write to the file
  // should encrypt this probably

  const updateData = {
    paymentInfo: {
      containsInfo: false,
      number: "123456",
      expiration: "01/22",
      securityCode: "456",
      postalCode: "07890",
    },
  };

  fs.writeFileSync(
    "./data/payment.json",
    JSON.stringify(updateData, null, 2),
    (err) => {
      if (err) console.log(err);
    }
  );
}

export function updateCustomerInfo() {
  // NOTES:
  // use inquirer to get all customer information then use it to create new updateData object
  // then write to the file

  const updateData = {
    customerInfo: {
      containsInfo: false,
      firstName: "Aryan",
      lastName: "Patel",
      email: "aryan@test.com",
      phone: "1234567890",
      address: {
        street: "123 Test Way",
        unitNumber: "A",
        city: "Test Park",
        state: "NJ",
        postalCode: "07204",
        deliveryInstructions: "leave at main entrance",
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
}
