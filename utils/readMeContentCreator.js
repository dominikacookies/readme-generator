const createReadmeContent = (answers) => {
  //if license type selected get badge
  const {title, description, installationInstructions, usageInformation, licenseType, contributingGuidelines, testingInstructions, email, githubLink} = answers
  return `# ${title}

  License badge
  
  ## Table of Contents
    - [Description](#description)
    - [Installation instructions](#installation-instructions)
    - [Usage information](#usage-information)
    - [License](#license)
    - [Contributing guidelines](#contributing-guidelines)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Description
  ${description}
  
  ## Installation instructions
  ${installationInstructions}
  
  ## Usage information
  ${usageInformation}
  
  ## License
  This project is licensed under the ${licenseType} license.
  
  ## Contributing guidelines
  ${contributingGuidelines}
  
  ## Tests
  ${testingInstructions}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work on [Github] (${githubLink}).`
}

module.exports = createReadmeContent;