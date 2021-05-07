const inquirer = require("inquirer");
const createReadmeContent = require("./readmeContentCreator.js")
const generateReadme = require("./readmeFileCreator.js")

const getProjectInformation = async (questions) => {
  const answers = await inquirer.prompt(questions)
  return answers;
}

const init = async () => {
  const questions = [
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "How would you describe your project?",
      name: "description",
    },
    {
      type: "input",
      message: "Please provide usage installation instructions for your project.",
      name: "installationInstructions",
    },
    {
      type: "input",
      message: "Please provide usage information for your project",
      name: "usageInformation",
    },
    {
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      type: "list",
      message: "Please select your project license from the below options.",
      name: "licenseType",
    },
    {
      type: "input",
      message: "Please enter the contributing guidelines for your project.",
      name: "contributingGuidelines",
    },
    {
      type: "input",
      message: "Please enter information about how a user could test your project.",
      name: "testingInstructions",
    },
    {
      type: "input",
      message: "If a user has any questions, please enter the email address they can reach you at.",
      name: "email",
    },
    {
      type: "input",
      message: "Please provide your Github username.",
      name: "githubUsername",
    },
  ];
  const answers = await getProjectInformation(questions);
  const readmeContents = createReadmeContent(answers)
  generateReadme(readmeContents, answers.title)
};
init();