function generateMarkdown(data) {
  return `
# ${data.title} 
${data.description}
# 
${data.installation}
# Usage
${data.usages}
# License
${data.licenses}
# Contributing
${data.contribute}
# Tests
${data.tests}
# Questions


`;
};

module.exports = generateMarkdown;