#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base amount
    EURO: 0.85,
    GBP: 0.75,
    JPY: 109.5,
    CNY: 6.3,
    PKR: 172.5,
    INR: 70.5,
    AUD: 1.35,
    BDT: 84.5,
    SAR: 3.75,
    SGD: 1.35
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency:",
        type: "list",
        choices: ["USD", "EURO", "GBP", "JPY", "CNY", "PKR", "INR", "AUD", "BDT", "SAR", "SGD"]
    },
    {
        name: "to",
        message: "Enter to currency:",
        type: "list",
        choices: ["USD", "EURO", "GBP", "JPY", "CNY", "PKR", "INR", "AUD", "BDT", "SAR", "SGD"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let ToAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let finalAmount = baseAmount * ToAmount;
console.log(finalAmount);
