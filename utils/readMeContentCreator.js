const getLicenseBadge = (licenseType) => {
  let badge = "";
  if (licenseType === "None" ) {
    return ""
  }
  switch (licenseType) {
    case "MIT":
      badge = `![image](https://img.shields.io/apm/l/vim-mode)`
      break;
    
    case "APACHE 2.0":
      badge = `![image](https://img.shields.io/crates/l/rustc-serialize/0.3.24)`
      break;
    
    case "GPL 3.0":
      badge = `![image](https://img.shields.io/eclipse-marketplace/l/notepad4e?label=GPL%203.0)`
      break;
  
    case "BSD 3":
      badge = `![image](https://img.shields.io/pypi/l/Django)`
      break;
  }
  return badge;
}

const constructLicenseInformation = (licenseType) => {
  let licenseDetails = {};
  if (licenseType === "None" ) {
    return "This project is not licensed."
  }
  switch (licenseType) {
    case "MIT":
      licenseDetails.name = "MIT"
      licenseDetails.url = `https://www.tawesoft.co.uk/kb/article/mit-license-faq`
      break;
    
    case "APACHE 2.0":
      licenseDetails.name = "APACHE 2.0"
      licenseDetails.url = `https://www.apache.org/licenses/LICENSE-2.0`
      break;
    
    case "GPL 3.0":
      licenseDetails.name = "GPL 3.0"
      licenseDetails.url = `https://www.gnu.org/licenses/gpl-3.0.en.html`
      break;
  
    case "BSD 3":
      licenseDetails.name = "BSD 3"
      licenseDetails.url = `https://opensource.org/licenses/BSD-3-Clause`
      break;
  }
  return `This project is licensed under the ${licenseDetails.name} license. 
  [Click here](${licenseDetails.url}) to read about the details of this license.`;
}

const createReadmeContent = (answers) => {
  const {title, description, installationInstructions, usageInformation, licenseType, contributingGuidelines, testingInstructions, email, githubUsername} = answers
  const licenseBadge = getLicenseBadge(licenseType)
  const licenseInformation = constructLicenseInformation(licenseType)
  const githubLink = `https://github.com/${githubUsername}`

  return `
  # ${title}

  ${licenseBadge}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Description
  ${description}
  
  ## Installation
  \`\`\`
  ${installationInstructions}
  \`\`\`
  
  ## Usage
  ${usageInformation}
  
  ## License
  ${licenseInformation}
  
  
  ## Contributing
  ${contributingGuidelines}
  
  ## Tests
  ${testingInstructions}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work on [Github](${githubLink}).`
}

module.exports = createReadmeContent;