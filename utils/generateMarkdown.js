// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `# ${license}`
    } else {
        return ``
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `# ${license}`
    } else {
        return ``
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `# ${license}`
    } else {
        return ``
    }
}

function renderTitle(title) {
    return `# ${title}`;
}

function renderDescription(description) {
    return `# Description
${description}`
}

function renderInstallation(installation) {
    return `# Installation
${installation}`
}

function renderUsage(usage) {
    return `# Usage
${usage}`
}

function renderContributing(contributing) {
    return `# Contributing
    ${contributing}`
}

function renderTests(tests) {
    return `# Tests
${tests}`
}

function renderQuestions(user, email) {
    return `
# Questions
${user}
Send me an email at ${email} with any additional questions.
`
}

function renderTableOfContents(license) {
    if(license) {
    return `
1.[License](#license)
2.[Description](#description)
`
}
    else {
        return `
1.[Description](#description)
2.[installation](#installation)
`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderTitle(data.title)}
${renderTableOfContents(data.license)}
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderDescription(data.description)}
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderLicenseSection(data.license)}
${renderContributing(data.contributing)}
${renderTests(data.tests)}
${renderQuestions(data.user, data.email)}
`;
}

module.exports = generateMarkdown;
