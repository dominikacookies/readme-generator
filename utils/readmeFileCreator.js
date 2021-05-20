const fs = require("fs")

const callback = (err) => {
  const message = err ? err : "Your new readme file has been created."
  console.log(message)
}

const generateReadme = (readmeContents, title) => {
  const fileName = title.replace(/\s+/g, '-').toLowerCase()
  fs.writeFile(`README-${fileName}.md`, readmeContents, callback)
}

module.exports = generateReadme;