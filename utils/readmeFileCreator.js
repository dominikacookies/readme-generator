const fs = require("fs")

const callback = (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Your new readme file has been created.")
  }
}

const generateReadme = (readmeContents, title) => {
  const fileName = title.replace(/\s+/g, '-').toLowerCase()
  fs.writeFile(`README-${fileName}.md`, readmeContents, callback)
}

module.exports = generateReadme;