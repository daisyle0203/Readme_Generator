// Include packages needed for this application
const inquirer = require("inquirer")
const { writeFile } = require("fs").promises
const { generateMarkdown } = require("./utils/generateMarkdown.js")

// Create runCode function and then run it
const runCode = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the project about?",
        name: "description",
      },
      {
        type: "input",
        message: "What does the user need to install to run this app?",
        name: "installation",
      },
      {
        type: "input",
        message: "What is the use of your project?",
        name: "usage",
      },
      {
        type: "list",
        message: "What license is being used?",
        name: "license",
        choices: ["None", "Apache 2.0", "MIT", "GPL v3.0"],
      },
      {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributions",
      },
      {
        type: "input",
        message: "What commands are needed to test this app?",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your Github username?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    ])
    await writeFile("README.md", generateMarkdown(answers))
    console.log("Successfully created README.md!")
  } catch (e) {
    console.log(e)
  }
}
runCode()
