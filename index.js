const fs = require("fs")
const sortArray = require("./generatesHTML")
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
var allEmployees = []

//Initial message in command line upon startup//
console.log("Welcome to the Team Profile Generator!")


//initial inquirer prompt questions//
const initialQuestions = [
    {
        type: "input",
        name: "mgrName",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "mgrId",
        message: "What is the manager's id number?"
    },
    {
        type: "input",
        name: "mgrEmail",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "mgrOfficeNum",
        message: "What is the manager's office number?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of employee would you like to add next?",
        choices: [
            "Engineer", 
            "Intern", 
            "I am finished building my team.",
        ]
    },
 ]; 



function promptUser() {
    return inquirer.prompt(initialQuestions)
    .then(({mgrName, mgrId, role, mgrEmail, mgrOfficeNum}) => {
        //console.log(mgrName, mgrId, role, mgrEmail, mgrOfficeNum)
        let newMgr = new Manager(mgrName, mgrId, mgrEmail, mgrOfficeNum)
        console.log(newMgr)
        allEmployees.push(newMgr)
        if (role === "Engineer") {
            promptEngineerQuestions()
        } else if (role === "Intern") {
            promptInternQuestions()
        } else {
            console.log("Generating HTML!")
            sortArray(allEmployees)
        }
    }) 
    }


function promptEngineerQuestions() {
    return inquirer.prompt([
    {
        type: "input",
        name: "engName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "engId",
        message: "What is the engineer's ID number?"
    },
    {
        type: "input",
        name: "engEmail",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "engGithub",
        message: "What is the engineer's Github username?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of employee would you like to add next?",
        choices: [
            "Engineer", 
            "Intern", 
            "I am finished building my team.",
        ]
    }])
    .then(({engName, engId, engEmail, engGithub, role}) => {
        //console.log(github)
        let newEng = new Engineer(engName, engId, engEmail, engGithub,)
        console.log(newEng)
        allEmployees.push(newEng)
        if (role === "Engineer") {
            promptEngineerQuestions()
        } else if (role === "Intern") {
            promptInternQuestions()
        } else {
            console.log("Generating HTML!")
            sortArray(allEmployees)
        }
    })
}

function promptInternQuestions() {
    return inquirer.prompt([
        {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "internId",
        message: "What is the intern's ID number?"
    },
    {
        type: "input",
        name: "internEmail",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What school does the intern attend?"
    },
    {
        type: "list",
        name: "role",
        message: "Which type of employee would you like to add next?",
        choices: [
            "Engineer", 
            "Intern", 
            "I am finished building my team.",
        ]
    }])
    .then(({internName, internId, internEmail, school, role}) => {
        //console.log(school)
        let newIntern = new Intern(internName, internId, internEmail, school)
        console.log(newIntern)
        allEmployees.push(newIntern)
        if (role === "Engineer") {
            promptEngineerQuestions()
        } else if (role === "Intern") {
            promptInternQuestions()
        } else {
            console.log("Generating HTML!")
            sortArray(allEmployees)
        }

    })
}

promptUser()
//fs.writeFileSync('src.html', 'allEmployees');
//console.log('file created');