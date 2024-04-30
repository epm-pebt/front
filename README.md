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

====================================

# Deployment and Versioning Guide

This guide details the steps for deploying Ecobites Front-End across development, staging, and production environments, incorporating a robust versioning strategy to manage releases efficiently.

## Branching and Versioning Strategy Overview

-   **Development Branch**: Primary branch for development. All features and fixes start here.
-   **Staging Branch**: Mirrors production environment. Used for final testing before production.
-   **Production Branch**: Represents the live, user-facing environment. Only well-tested code is deployed here.

## Versioning Conventions

We use [Semantic Versioning](https://urldefense.com/v3/__https://semver.org/__;!!GF_29dbcQIUBPA!0BGKNRQ31515bnMADp-NBIB9e6b6v7tRat1wG1KIw2OqKBmukL9srMMkpsAzOhMxO5AozlAkSLfFo-hchJk$ [semver[.]org]) (SemVer), which involves version numbers in the format of MAJOR.MINOR.PATCH:

-   **MAJOR** version when you make incompatible API changes,
-   **MINOR** version when you add functionality in a backwards compatible manner, and
-   **PATCH** version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

## Workflow with Versioning

### 1. Feature Development

-   Developers create feature branches off the `development` branch.
-   Development proceeds on feature branches with commits to save progress.

### 2. Merging and Testing in Development

-   Complete features are merged into `development`.
-   Automated tests are run, and code is reviewed.
-   Once `development` accumulates enough features for a release, decide on the version increment (MAJOR, MINOR, or PATCH) based on the changes.
-   Update the version in `package.json`:
    ```json
    "version": "1.0.0"
    ```
-   Commit the version change:
    ```bash
    git commit -am "Bump version to 1.0.0"
    ```

### 3. Docker Image Creation and Deployment to Staging Environment

-   Merge `development` into `staging`.
-   Tag the merge commit with the version number:

```bash
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

-   **FYI Only (This is set up by DEV Ops)** GitHub Actions will detect these changes, build a Docker image, and push it to Docker registry:

```yaml
steps:
    - name: Build and Push Docker image
      run: |
          docker build -t ecobites_app:${{ github.sha }} .
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push ecobites_app:${{ github.sha }}
```

-   Use the same version tag for the Docker image for staging deployment.
-   CI/CD Pipeline should perform infrastructure provisioning and deployment with Terraform:

```yaml
steps:
    - name: Deploy with Terraform
      run: |
          terraform init
          terraform apply -auto-approve
```

-   After deployment, **QA Team** should conduct thorough testing including `integration tests` and `User Acceptance Tests (UAT)`.

### 4. Docker Image Creation and Deployment to Production

-   After successful staging tests, `merge staging into production`.
-   **FYI Only (DevOps will set up this)** GitHub Actions will detect these changes, build a Docker image and push it to Docker registry:

```yaml
steps:
    - name: Build and Push Docker image
      run: |
          docker build -t ecobites_app:${{ github.sha }} .
          echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
          docker push ecobites_app:${{ github.sha }}
```

-   Use the same version tag as the Docker image tag for production deployment.

### 5. Infrastructure Provisioning and Deployment with Terraform (FYI)

-   Upon successful Docker image creation, `CI/CD Pipeline` should perform `infrastructure provisioning and deployment with Terraform`:

```yaml
steps:
    - name: Deploy with Terraform
      run: |
          terraform init
          terraform apply -auto-approve
```

#### Automated Versioning and CI/CD Integration

-   Set up CI/CD pipeline to handle version tagging automatically upon merging into staging.
-   Automate Docker image creation and pushing to Docker registry when a new tag is created.
-   Automate the infrastructure provisioning and deployment using Terraform upon successful Docker image creation.
-   Additionally, pipelines should run tests, linting, and build processes before deployment.

#### Post-Deployment and Version Tracking

-   After deploying, monitor EC2 instance performance and application health against the deployed Docker image version.
-   Document version changes with a changelog and use GitHub releases to document Docker image's version history and related documentation.

#### Rollback Procedures

-   If issues are detected post-deployment, quickly rollback to the previous stable Docker image by updating the Docker image version in the Terraform main.tf file and applying it:

```bash
terraform apply
```

This ensures a stable version of the application is re-deployed. Monitor the EC2 instance post-deployment to confirm the rollback's success.
