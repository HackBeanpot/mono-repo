# Monorepo

## :joy: Introduction

Welcome to Hackbeanpot's monorepo! This repository contains both the live site and main site. The reason we have a monorepo is to allow both sites to use the same components from a shared ui folder. VSCode is strongly recommended as a code editor since we have settings configured for Vscode and also use their extensions.

## :zany_face: Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/HackBeanpot/mono-repo.git
```

2. **Change directories**

```bash
cd mono-repo
```

3. **Install the packages**

```bash
# In the project directory
yarn install
```

4. **Install the ESlint and Prettier VSCode extensions**

5. **Cd into the respective project you want to run, yarn install, then yarn develop**

## :file_folder: File Structure

A quick look at the top-level file structure used

    .
    ├── /husky
    ├── /vscode
    ├── /docs
    ├── /live-site
    ├── /main-site
    ├── /node_modules
    ├── /shared-ui
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

1.  **`/husky`**: This directory contains the husky pre-commit hook.

2.  **`/vscode`**: This directory contains vscode setting configurations.

3.  **`/docs`**: This directory contains the pull request template.

4.  **`/live-site`**: This directory contains the project code for the live site.

5.  **`/main-site`**: This directory contains the project code for the main site.

6.  **`/node_modules`**: This directory contains all of the shared modules of code that the live site, main site, and shared ui depends on (npm packages)are automatically installed.

7.  **`/shared-ui`**: This directory contains the shared ui components and styles.

8.  **`.eslintignore`**: This file specifies which files should be ignored by eslint

9.  **`.eslintrc.json`**: This file configures eslint styling rules

10. **`.gitignore`**: This file tells git which files will not maintain a version history, thus don't need to be tracked.

11. **`.prettierrc`**: This file configures prettier styling rules

12. **`package.json`**: A manifest file for Node.js projects, this file includes the metadata for the project. Metadata includes the project's name, author, etc. This manifest is how npm knows which packages to install to run the project.

13. **`README.md`**: A reference text file containing information about the project.

14. **`tsconfig.json`**: This is a typescript configuration file to specify typescript language checks

15. **`yarn.lock`**: (First see `package.json`, below) This is an automatically generated file based on the exact versions of your yarn dependencies used for the project. **You won't change this file directly.**
