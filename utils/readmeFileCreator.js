const fs = require("fs")

const callback = (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Your new readme file has been created.")
  }
}

const generateReadme = (readmeContents) => {
  fs.writeFile("README.md", readmeContents, callback)
}

module.exports = generateReadme;