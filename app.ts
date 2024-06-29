console.log(chalk.yellowBright(chalk.italic("\n\t\t\t\t💰💰💰💰💰💰💰💰💰💰💰💰💰💰 WELCOME EASY PASA APPLICATION 💰💰💰💰💰💰💰💰💰💰💰💰💰💰💰")));
import inquirer from "inquirer";
import chalk from "chalk";
let Cash_balance : number = 50000 ;
// interface user{
//     pincode:string;
// }

let transactionHistory: string[] = [];

let pin = await inquirer.prompt(
    [
        {
            type:"number",
            name :"pincode",
            message:(chalk.greenBright("Enter your pin code")),
            masks :" * ",
            prefix:" ",
            
        }
    ]
)
if(pin.pincode === 12345){
    console.log(chalk.blueBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));
    console.log(chalk.yellowBright(chalk.italic("\n\t\t\t\t🎉🎉🎉🎉🎉🎉🎉your password iscorrect 🎉🎉🎉🎉🎉🎉")));
    console.log(chalk.blueBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));

    while(true){

        let userinput= await inquirer.prompt(
            [
                {
                    type :"list",
                    name:"option",
                    choices:["check balance","bank transfer","Easy load","mobile package","transaction history","exit"],
                }
            ]
        )
        if(userinput.option === "check balance" ){
          console.log(chalk.yellowBright(`\n \t\t\t\t\tyour current account balance is ${Cash_balance}`));
        }
        else if(userinput.option === "bank transfer"){
            let input= await inquirer.prompt([
                {
                    type:"list",
                    name:"choicebank",
                    choices:["HBL","UBL","HABIB METRO","BANK ALPALA"],
                }
            ]
        )
        
        if(input.choicebank === "HBL" || input.choicebank ==="UBL" 
        || input.choicebank === "HABIB METRO" ||input.choicebank ==="BANK ALPALA"){
        
            let question1=await inquirer.prompt(
                [
                    {
                        type:"input",
                        name:"option",
                        message:(chalk.greenBright("Enter your account number")),
                        prefix:" ",
                         validate: function(value) {
                            const pass = value.match(/^\d{6}$/);
                            if (pass) {
                                return true;
                            }
                            return "\n\t\t\t\t\tPlease enter a 6-digit account number";
                        }
                    },
                
                    {
                        type:"input",
                        name:"option2",
                        message:(chalk.greenBright("Enter withdraw amount")),
                        prefix:" ",
        
                    },
        
            ]
        )
console.log(chalk.blueBright("\n\t\t\t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"));

        if(question1.option2 > Cash_balance){
            console.log(chalk.redBright("\n\t\t\t\t☹️☹️☹️☹️☹️☹️unsufficient  balance☹️☹️☹️☹️☹️☹️"));
        }
        else if (question1.option2 <= Cash_balance){
        Cash_balance = Cash_balance - question1.option2;
         console.log(Cash_balance,new Date().toLocaleString());
        transactionHistory.push(` withdraw : ${ question1.option2} ,Remaing balance ${Cash_balance} - Date: ${new Date().toLocaleString()}`);
        }
        
        }
        }
        
        else if(userinput.option === "Easy load"){
            let input2 =await inquirer.prompt(
                [
                    {
                        type:"input",
                        name:"option2",
                        message:(chalk.greenBright(chalk.italic("Enter mobile number"))),
                        validate: function(value) {
                            const pass = value.match(/^\d{11}$/);
                            if (pass) {
                                return true;
                            }
                            return "\n\t\t\t\t\tPlease enter your correct 11 digit mobile number";
                        }
                
                    },
                    {
                        type:"input",
                        name:"option",
                        message:(chalk.greenBright(chalk.italic("Enter withdraw amount"))),
        
                    },
                ]
            )
            if(input2.option > Cash_balance){
                console.log(chalk.bgRed("\n\t\t\t\t\t☹️☹️☹️☹️☹️☹️unsufficient  balance☹️☹️☹️☹️☹️☹️"));
            }
            else if (input2.option <= Cash_balance){
            Cash_balance = Cash_balance - input2.option;
            console.log(Cash_balance,new Date().toLocaleString());
            transactionHistory.push(`withdraw${input2.option},Remaing balance ${Cash_balance} - Date: ${new Date().toLocaleString()}`);
            }
        
        }
        else if(userinput.option === "mobile package"){
            let uinput=await inquirer.prompt(
                [
                {
                    type:"input",
                    name:"option",
                    message:(chalk.blue(chalk.italic("Enter mobile number"))),
                    validate: function(value) {
                        const pass = value.match(/^\d{11}$/);
                        if (pass) {
                            return true;
                        }
                        return "\n\t\t\t\t\tPlease enter your correct 11 digit mobile number";
                    }
            
                
                },
                {
                    type:"input",
                    name:"choice",
                    message:(chalk.blue(chalk.italic("Enter package amount"))),
                },
            ]
        )
          if(uinput.choice > Cash_balance){
            console.log(chalk.redBright("\n\t\t\t\t\t☹️☹️☹️☹️☹️☹️unsufficient  balance☹️☹️☹️☹️☹️☹️"));
        }
        else if (uinput.choice <= Cash_balance){
        Cash_balance = Cash_balance - uinput.choice;
        console.log(Cash_balance,new Date().toLocaleString());
        transactionHistory.push(` (withdraw ${uinput.choice}Remaing  balance ${Cash_balance} - Date: ${new Date().toLocaleString()}`);
        }
        }
        else if(userinput.option === "transation histry"){
           console.log(transactionHistory);

        
        }
        
        else{
            console.log(chalk.greenBright(chalk.italic("\n\t\t\t\t\t☹️☹️☹️☹️☹️☹️EASY PASA APPLICATION IS CLOSE☹️☹️☹️☹️☹️☹️")));
          break;
        }
        
        
        }
}
else{
       console.log (chalk.redBright(chalk.italic("\n\t\t\t\t☹️ ☹️ ☹️ ☹️ ☹️ Enter your correct pin code  ☹️ ☹️ ☹️ ☹️ ☹️")));
}
    
    
