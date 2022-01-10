// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `# ${data.license}`
    } else if (!license) {
        return ``
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return ``
    } else {
        return `# ${data.license}`
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (!license) {
        return ``
    } else {
        return `# ${data.license}`
    }
}

function renderTitle(title) {
    return `# ${data.title}`;
}

function renderDescription(description) {
    return `# ${data.description}`
}

function renderInstallation(installation) {
    return `# ${data.installation}`
}

function renderUsage(usage) {
    return `# ${data.usage}`
}

function renderContributing(contributing) {
    return `# ${data.contributing}`
}

function renderTests(tests) {
    return `# ${data.tests}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
${renderTitle(data.title)}
${renderDescription(data.description)}
// insert Table Of Contents here
${renderInstallation(data.installation)}
${renderUsage(data.usage)}
${renderLicenseSection(data.license)}
${renderContributing(data.contributing)}
${renderTests(data.tests)}
`;
}

module.exports = generateMarkdown;
