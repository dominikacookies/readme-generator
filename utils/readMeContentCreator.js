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
  }
  return badge;
}

const createReadmeContent = (answers) => {
  const {title, description, installationInstructions, usageInformation, licenseType, contributingGuidelines, testingInstructions, email, githubLink} = answers
  const licenseBadge = getLicenseBadge(licenseType)
  // const licenseInformation = constructLicenseInformation(licenseType)

  console.log(licenseBadge)

  return `
  # ${title}

  ${licenseBadge}
  
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
  
  ## Installation
  ${installationInstructions}
  
  ## Usage
  ${usageInformation}
  
  ## License
  
  
  ## Contributing guidelines
  ${contributingGuidelines}
  
  ## Tests
  ${testingInstructions}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work on [Github] (${githubLink}).`
}

module.exports = createReadmeContent;