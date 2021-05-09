# readme-generator

  ## Table of Contents
  - [Description](#description)
  - [Key features](#key-features)
  - [Installation](#installation)

## Description
This is a command line application which dynamically generates a README.md file based on a selection of user responses.
The application has been designed to assist developers in creating new applications quickly and efficiently by taking away some of the admin responsibilities, giving them more time to focus actually building, testing and deploying their project.

## Key Features
- the user is prompted with a series of project related questions using the inquirer package
- the user's answers are populated into a README.md template code using template literals
- the application uses the switch statement to display the relevant copyright license badge and information
- the README file is created with the project title in its name so that the user can create and store multiple READMEs without having to move them out of the app

## Demo Video
[Click here to view](.assets/../assets/demo-video.mov)

## Technologies Used
- Javascript
- jQuery
- Inquirer

## Installation 
- Clone the GitHub project onto your local machine
``` 
git clone https://github.com/dominikacookies/readme-generator.git
```
- Navigate into the project
- Open the project in VSCode
- Open the integrated terminal
- In the terminal, enter: 
  ```
  node index.js. 
  ``` 
  Ensure that you have installed node.
