/*const fs = require("fs");
const util = require("util");
const axios = require("axios");


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

const config = { headers: { accept: "application/json" } };

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();


inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios.get(queryUrl).then(function (res) {
      const repoNames = res.data.map(function (repo) {
        return repo.name;
      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos.txt", repoNamesStr, function (err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });


const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

const config = { headers: { accept: "application/json" } };
inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl1 = `https://api.github.com/users/${username}/repos?per_page=100`;
    const queryUrl2 = `https://api.github.com/users/${username}`;


    axios.get(queryUrl1).then(function (res) {
      const repoNames = res.data.map(function (repo) {
        return repo.name;

      });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos2.txt", repoNamesStr, function (err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
    axios.get(queryUrl2).then(function (res) {
      const results = JSON.parse(res)
        (function (repo) {
          return repo.name;

        });

      const repoNamesStr = repoNames.join("\n");

      fs.writeFile("repos2.txt", repoNamesStr, function (err) {
        if (err) {
          throw err;
        }

        console.log(`Saved ${repoNames.length} repos`);
      });
    });
  });
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
  ]);
}

function generateHTML(answers) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${answers.name}</h1>
      <p class="lead">I am from ${answers.location}.</p>
      <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${answers.github}</li>
        <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
      </ul>
    </div>
  </div>
  </body>
  </html>`;
}

promptUser()
  .then(function (answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })
  .then(function () {
    console.log("Successfully wrote to index.html");
  })
  .catch(function (err) {
    console.log(err);
  });


const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const markdown = require('./utils/generateMarkdown');
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const questions = [
  {
    type: "input",
    message: "Enter your Github username: ",
    name: "username"
  },
  {
    type: "input",
    message: "Enter your project title: ",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a short project description: ",
    name: "description"
  },
  {
    type: "input",
    message: "Enter the installation process: ",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter the usage of the project: ",
    name: "usage"

  },
  {
    type: "input",
    message: "Enter licenses used for the project: ",
    name: "licenses"
  },
  {
    type: "input",
    message: "Enter contributing information: ",
    name: "contribute"

  }, {
    type: "input",
    message: "Enter any tests you are running for your project: ",
    name: "tests"
  }
];
async function writeToFile(fileName, data) {
  writeFileAsync(fileName, data).then(function () {
    console.log("Successfully wrote README!");
  }).catch(err => {
    console.log('err ', err);
  });
};
async function init() {

  await inquirer
    .prompt(questions)
    .then(answers => {
      const userName = answers.username;
      const apiData = api.getUser(userName);
      apiData.then(res => {
        const data =
        {
          name: res.name,
          username: answers.username,
          url: res.url,
          title: answers.title,
          description: answers.description,
          installation: answers.installation,
          usages: answers.usage,
          licenses: answers.licenses,
          tests: answers.tests,
          contribute: answers.contribute,
          email: res.email,
          pfp: res.avatar_url
        }
        const final = markdown(data)
        writeToFile("README.md", final);
      })
        .catch(err => {
          console.log('err ', err);
        });
    });


};

init();*/