// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  if (license === "MIT") {
    badge =
      "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)"
  } else if (license === "Apache 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
  } else if (license === "GPL v3.0") {
    badge =
      "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  } else {
    badge = ""
  }
  return badge
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ""
  if (license === "MIT") {
    licenseLink = "https://choosealicense.com/licenses/mit/"
  } else if (license === "Apache 2.0") {
    licenseLink = "http://www.apache.org/licenses/LICENSE-2.0"
  } else if (license === "GPL v3.0") {
    licenseLink = "https://www.gnu.org/licenses"
  } else {
    licenseLink = ""
  }
  return licenseLink
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""
  if (license === "None") {
    licenseSection = ""
  } else {
    licenseSection = `License: ${license} `
  }
  return licenseSection
}

// Function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Table of Contents:
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributors](#contributors)
   * [Tests](#tests)
   * [Questions](#questions)
  
    
  ## Description:
  ${answers.description}

  ## Installation:
  You must install the following for this app to function:
  ${answers.installation}

  ## Usage:${answers.usage}

  ## License: 

  ${renderLicenseBadge(answers.license)}

  ${renderLicenseLink(answers.license)}

  ## Contributors:${answers.contributions}

  ## Tests:
  Run the following commands in your terminal to test this app:${answers.tests}

  ## Questions:
  If you have any questions, you may contact me at either
  Github: https://github.com/${answers.username}
  or
  Email: ${answers.email}
`
}

// Exports
module.exports = { generateMarkdown }
