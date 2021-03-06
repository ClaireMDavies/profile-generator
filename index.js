const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const Manager = require("./lib/manager.js");
const distributionDirectory = './dist/';

//base question array, applicable to all classes
var employeeQuestions = [
    {
        name: "name",
        type: "input",
        message: "What is their name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee id?"
    },
    {
        name: "email",
        type: "input",
        message: "What is their email address?"
    }];
    

// adding the special manager question
var managerQuestions = employeeQuestions.slice();
    
    managerQuestions.push({
        name:"officeNumber",
        type:"input",
        message: "What is the manager's office number?"
    });

// adding special engineer question    
var engineerQuestions = employeeQuestions.slice();

    engineerQuestions.push({
        name:"githubProfile",
        type:"input",
        message: "What is the engineer's github profile?"
    });

//adding special intern question
var internQuestions = employeeQuestions.slice();

    internQuestions.push({
        name:"school",
        type:"input",
        message: "What is the intern's school?"
    });

// question allowing user to choose what to do next
var addEmployee = [
    {
    name:"addEmployee",
    type:"list",
    message: "What employee type needs adding?",
    choices: ["Engineer", "Intern", "No more employees to add"],
    }
]

var employeeArray = []

// create function to initate the input sequence
function askForInput() {
    managerQuestions[0].message = "What is the manager's name?";

    inquirer.prompt(managerQuestions).then((answers)=> {

        var manager = new Manager(answers);
        employeeArray.push(manager);
        //console.log(employeeArray);

        addMoreEmployees()
    })  
   
}

//create function to ask for additional employees 
function addMoreEmployees(){
    inquirer.prompt(addEmployee).then((answers) => {
        var nextEmployee = answers.addEmployee;
        switch (nextEmployee) {
            case "Engineer":
                askEngineerQuestions();
                break;
            case "Intern":
                askInternQuestions();
                break;
            case "No more employees to add":
               teamHTML(employeeArray);
                break;
        }  
    })
}

//create function to run engineer questions
function askEngineerQuestions() {

    engineerQuestions[0].message = "What is the engineer's name?";

    inquirer.prompt(engineerQuestions).then((answers)=> {

        var engineer = new Engineer(answers);
        employeeArray.push(engineer);
        //console.log(employeeArray);

        addMoreEmployees()
    })  
}

//create function to run intern questions
function askInternQuestions() {

    internQuestions[0].message = "What is the intern's name?";
    
    inquirer.prompt(internQuestions).then((answers)=> {

        var intern = new Intern(answers);
        employeeArray.push(intern);
        //console.log(employeeArray);

        addMoreEmployees()
    })  
}


//create function to generate html
function teamHTML(employeeArray) {

    var html = "";

    for (var i=0; i < employeeArray.length; i++) {
        
        html += employeeArray[i].generateHtml();
    }
    
    try {
        if (!fs.existsSync(distributionDirectory)) {
            fs.mkdirSync(distributionDirectory);
        }
        var employeeTemplate = fs.readFileSync(`./src/index.html`, 'utf8');
        employeeTemplate = employeeTemplate.replace("[placeholder]", html);
        fs.writeFileSync('./dist/output.html', employeeTemplate);
        fs.copyFileSync('./src/style.css', './dist/style.css');
    }
    catch (err) {
        console.error(err);
    }

      
}

askForInput();
