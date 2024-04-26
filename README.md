# Ecobites Web App Frontend Project Setup

Welcome to the Ecobites Web App project! This guide will take you through the steps you need to run, test, and work on this application.

## Prerequisites

Before you can start, please make sure you have the following software installed on your machine:

-   Node.js: We recommend using the latest stable version of Node.js. You can download Node from the official [Node.js website](https://nodejs.org/).
-   NVM (Node Version Manager) – this allows you to manage multiple active Node.js versions on your machine. You can download NVM via the install script available in the [NVM repository](https://github.com/nvm-sh/nvm).
-   Git: Please follow the instructions on the official [Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git.

## Tech Stack

The following technologies are used in this project:

-   React.js for the frontend UI.
-   Jest, for running tests.
-   Storybook, for developing UI components in isolation.
-   ESLint, for code linting.
-   Prettier, for code formatting.
-   [Material UI](https://mui.com/material-ui/)

As you update/include more technologies, document it here.

### Clone Project Repository

To start off, we would clone the project repository:

1. In your terminal, use the `cd` command to navigate to the directory where you want to clone the project.
2. Run `git clone https://github.com/epm-pebt/front.git`
3. Navigate into the project directory using `cd front`

### Install Dependencies

1. In your terminal, navigate to the root directory of the project (if you're not there already).
2. Run `npm install` to install the application dependencies as specified in `package.json`.

## Running the App Locally

To run the application on your local machine, execute the command `npm run dev`.

## Running Tests

We use Jest for testing in this project. To run all tests, use the command `npm run test`.

## Code Formatting

To format the code in the project, run `npm run format`.

## Linting

To execute the linting rules, run `npm run lint`.

## Storybook

We use Storybook to facilitate component-driven development. To start the Storybook, run `npm run storybook`.

Also use `npm run build-storybook` when you need a static version of your storybook.

## Building the Application

Running `npm run build` in your terminal will build the application for production.

Remember, our goal is to write high quality, maintainable code. When you work on the project, use clear function/variable names and always document your code properly. If you're ever unsure - ask! We're a team and we're here to help each other. Let's get this MVP running!

Thank you for contributing to the Ecobites Web App!
