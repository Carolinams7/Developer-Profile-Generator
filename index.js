const inquirer = require("inquirer");
const api = require("./api");
const generateHTML = require("./generateHTML");



const questions = [{
    type: "input",
    name: "github",
    message: "what is your Github username?",
},
 
{
    type: "list",
    name: "color",
    message: "What is your favorite color?",
    choices: ["red", "blue", "green", "pink"]
}];

function writeToFile(fileName, data) {
 
}

function init() {
   inquirer.prompt(questions)
   .then(function(response){
api.getUser(response.github)
   .then(function(res){
    // console.log(res.data);

return generateHTML({
    color: response.color, 
    ...res.data

})})
.then(function(data) {
    console.log (data)
})

}
   )}


init();
