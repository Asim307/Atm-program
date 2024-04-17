#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance=20000;
let mypin=8892;
let pinans=await inquirer.prompt([{
    name:"pin",
    message:"enter 4 digit pin",
    type:"number",
}]);
if (pinans.pin === mypin){
    console.log("correct pin!");

let operationans=await inquirer.prompt([{
    name:"operation",
    message:"select an option",
    type:"list",
    choices:["withdraw","check balance", "fast cash"],
}]);
if (operationans.operation === "withdraw"){
    let amountans=await inquirer.prompt([{
        name:"amount",
        message:"enter your amount",
        type:"number",
    }]);
    if (amountans.amount > 20000){
        console.log("unsufficient balance");
    }else{
    mybalance -= amountans.amount;
    console.log("you have cash withdraw pkr " + amountans.amount + " from your meezan bank account ! your remaining balance is " + mybalance);
    }
}else if (operationans.operation === "check balance"){
    console.log("your remaining balance is" + mybalance);
}if(operationans.operation === "fast cash"){
let fastcashans=await inquirer.prompt([{
    name:"fastcash",
    message:"please select one option",
    type:"list",
    choices:["5000","10000","15000","20000"],
}]);
if (fastcashans.fastcash > 20000){
    console.log("unsufficient balance");
}else{
     mybalance -= fastcashans.fastcash;
     console.log(`"you have cash withdraw pkr " ${fastcashans.fastcash} "your remaining balance is " ${mybalance}`)
}
}

}else {
    console.log("incorrect pin!");
}