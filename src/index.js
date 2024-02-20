const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of the README file:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of the project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for the project:',
    choices: ['MIT', 'Apache 2.0', 'GNU General Public License v3.0', 'BSD 2-Clause "Simplified" license', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter the contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions:',
  },
  {
    type: 'input',
    name: 'githubUsername',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    const githubLink = `[GitHub Profile](https://github.com/${answers.githubUsername})`;
    const contactCredentials = `For additional questions, please reach out to ${answers.email}`;

    const readme = `# ${answers.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contribution
${ answers.contribution}

## Test
${answers.tests}

## Questions
- ${githubLink}
- ${contactCredentials}
`;

    fs.writeFile('README.md', readme, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('README file generated successfully!');
    });
  });
