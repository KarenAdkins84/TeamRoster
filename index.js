//install inquirer@8.2.4
//install jest
//need tests directory(employee, engineer, intern, manager)
//need classes folder(lib)
//src=template helper code
//dist--for rendered html ouput and css
//need gitignore&&package.json
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

const generalQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the employees's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "Which role does this employee take?",
        choices: ["Engineer", "Intern", "Manager"]
    }
]
function promptUser() {
    return inquirer.prompt(generalQuestions)
    .then(({name, id, role, email}) => {
        console.log(name, id, role, email)
    }) 
    // if (role === Engineer) {
    //     promptEngineerQuestion()
    // } else if (role === Intern) {
    //     promptInternQuestion()
    // } else promptManagerQuestion()
    }
    //todo: if else statements to determine role and prompt additional questions based on role response
function promptEngineerQuestion() {
    return inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is the engineer's GitHub username?"
    })
    .then(({github}) => {
        console.log(github)
    })
}
function promptInternQuestion() {
    return inquirer.prompt({
        type: "input",
        name: "school",
        message: "What school does the intern attend?"
    })
    .then(({school}) => {
        console.log(school)
    })
}
function promptManagerQuestion() {
    return inquirer.prompt({
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?"
    })
    .then(({officeNum}) => {
        console.log(officeNum)
    })
}
promptUser()