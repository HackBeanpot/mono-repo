# Main site 2023

## :joy: Introduction

Welcome to Hackbeanpot's 2023 main site! This is where hackers and sponsors can find information about our hackathon in the months before our event!

## :zany_face: Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/HackBeanpot/2023-mono-repo.git
```

2. **Change directories**

```bash
cd 2023-mono-repo/main-site-2023
```

3. **Install the packages**

```bash
# In the project directory
yarn install
```

4. **Run the server locally**

```bash
yarn develop
```

Now the server will run locally, most likely on `http://localhost:8000`. Your work will be displayed, and as changes are saved it will auto-refresh the site.

## :file_folder: File Structure

A quick look at the top-level file structure used inside live-site-2023

    .
    ├── /node_modules
    ├── /src
    ├── gatsby-config.ts
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory contains all the source code for live-site-2023.

3.  **`gatsby-config.ts`**: This is a Gatsby configuration file.

4.  **`package.json`**: A manifest file for Node.js projects, this file includes the metadata for the project. Metadata includes the project's name, author, etc. This manifest is how npm knows which packages to install to run the project.

5.  **`README.md`**: A reference text file containing information about the project.

6.  **`yarn.lock`**: (First see `package.json`, below) This is an automatically generated file based on the exact versions of your yarn dependencies used for the project. **You won't change this file directly.**

## :gear: Technologies

The website is built on the following technologies:

- [Gatsby](https://www.gatsbyjs.com/): Site hosting provider
