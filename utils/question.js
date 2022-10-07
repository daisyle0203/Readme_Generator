const questions = [
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
      message: "What can the user do to contribute to this app?",
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
  ]

  module.exports = questions