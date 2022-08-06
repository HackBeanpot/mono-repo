# Main site 2023

## :joy: Introduction

Welcome to Hackbeanpot's 2023 monorepo! This repository contains both the live site and main site. The reason we have a monorepo is to allow both sites to use the same components from a shared ui folder.

## :zany_face: Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/HackBeanpot/2023-mono-repo.git
```

2. **Change directories**

```bash
cd 2023-mono-repo
```

3. **Install the packages**

```bash
# In the project directory
yarn install
```

4. **Cd into the respective project you want to run, yarn install, then yarn develop**

## :file_folder: File Structure

A quick look at the top-level file structure used

    .
    ├── /vscode
    ├── /live-site-2023
    ├── /main-site-2023
    ├── /node_modules
    ├── /shared-ui
    ├── .eslintignore
    ├── .eslintrc.cjs
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

1.  **`/vscode`**: This directory contains vscode setting configurations.

2.  **`/live-site-2023`**: This directory contains the project code for the live site

3.  **`/main-site-2023`**: This directory contains the project code for the main site

4.  **`/node_modules`**: This directory contains all of the shared modules of code that the live site, main site, and shared ui depends on (npm packages)are automatically installed.

5.  **`/shared-ui`**: This directory contains the shared ui components and styles

6.  **`.eslintignore`**: This file specifies which files should be ignored by eslint

7.  **`.eslintrc.cjs`**: This file configures eslint styling rules

8.  **`.gitignore`**: This file tells git which files will not maintain a version history, thus don't need to be tracked.

9.  **`.prettierrc`**: This file configures prettier styling rules

10. **`package.json`**: A manifest file for Node.js projects, this file includes the metadata for the project. Metadat incluedes the project's name, author, etc. This manifest is how npm knows which packages to isntall to run the project.

11. **`README.md`**: A reference text file containing information about the project.

12. **`tsconfig.json`**: This is a typescript configuration file to specify typescript language checks

13. **`yarn.lock`**: (First see `package.json`, below) This is an automatically generated file based on the exact versions of your yarn dependencies used for the project. **You won't change this file directly.**
