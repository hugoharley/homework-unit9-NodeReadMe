const fs = require("fs");
const util = require("util");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require('./generateMarkdown');

const questions = [
  "Project title",
  "Project Description"
];

function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data);
  fs.writeFile(fileName, markdown, function (error) {
    console.log('Error writing:', error);
  });
}

async function askQuestions() {
  const answers = [];
  let index = 0;
  while (index < questions.length) {
    let { answer } = await inquirer
      .prompt({
        message: questions[index],
        name: 'answer'
      });
    answers.push(answer);
    index++;
  }
  return answers;
}


async function getGithubInfo() {
  let { username } = await inquirer
    .prompt({
      message: "What is Your GitHub Username?",
      name: "username"
    });
  const queryUrl = `https://api.github.com/users/${username}/repos?per_page=10`;
  let res = await axios.get(queryUrl);
  const login = res.data[0].owner.login;
  const avatar = res.data[0].owner.avatar_url;
  return { login, avatar };
}