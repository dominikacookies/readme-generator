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
      choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None'],
      type: "checkbox",
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
      name: "testInstructions",
    },
    {
      type: "input",
      message: "If a user has any questions, please enter the email address they can reach you at.",
      name: "email",
    },
    {
      type: "input",
      message: "Please provide a link to your Github account.",
      name: "githubLink",
    },
  ];
  console.log(questions)
};
init();