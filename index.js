// Include packages needed for this application
const inquirer = require("inquirer")
const { writeFile } = require("fs").promises
const { generateMarkdown } = require("./utils/generateMarkdown.js")
const questions = require('./utils/question')
// Create runCode function and then run it
const runCode = async () => {
  try {
    const answers = await inquirer.prompt(questions)
    await writeFile('sampleREADME.md', generateMarkdown(answers))
    console.log("Successfully created README.md!")
  } catch (e) {
    console.log(e)
  }
}
runCode()
