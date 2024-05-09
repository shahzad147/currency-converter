#! /usr/bin/env node
import inquirer from "inquirer";
let c_value = {
    PKR: 278.09,
    UAE: 3.67,
    EUR: 0.93,
    GBP: 0.80,
    USD: 1
};
let ans = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ["PKR", "UAE", "EUR", "GBP", "USD"]
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ["PKR", "UAE", "EUR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert"
    }
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
