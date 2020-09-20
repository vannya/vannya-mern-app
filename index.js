#!/usr/bin/env node
const shell = require("shelljs");
const colors = require('colors');
const fs = require("fs");
const inquirer = require("inquirer");
const backendTemplates = require("./templates/backend/backendTemplates.js");
const frontendTemplates = require("./templates/frontend/frontEndTemplates.js");

let appName, appDirectory, googleId, googleSecret, mongoURI, cookieKey;

// Main function flow
const run = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "appName",
        message: "App Name: ",
        filter: function (val) {
          return val.toLowerCase();
        }
      },
      {
        type: "input",
        name: "googleId",
        message:
          "Go to console.developers.google.com, enable the Google+ API and get OAuth credentials if you haven't already.\n Google Client ID: "
      },
      {
        type: "input",
        name: "googleSecret",
        message:
          "Go to console.developers.google.com, enable the Google+ API and get OAuth credentials if you haven't already.\n Google Client Secret: "
      },
      {
        type: "input",
        name: "mongoURI",
        message:
          "Go to https://www.mongodb.com/cloud/atlas, create your database, add a database user and enter your URI here.\n Mongo URI: "
      },
      {
        type: "input",
        name: "cookieKey",
        message:
          "Enter a random string of lowercase alphabet letters for your cookie key. No spaces or special characters.\n Cookie Key: "
      }
    ])
    .then(answer => {
      appName = answer.appName;
      appDirectory = `${process.cwd()}/${appName}`;
      googleId = answer.googleId;
      googleSecret = answer.googleSecret;
      mongoURI = answer.mongoURI;
      cookieKey = answer.cookieKey;
    });
  await makeDirectory();
  await cdIntoNewFolder();
  await initializeGit();
  await createBackEndFileStructure();
  await addBackEndFiles();
  await configPackageJSON();
  await installBackEndPackages();
  await configDev();
  let success = await createReactApp("client");
  if (!success) {
    console.log(
      "Something went wrong while trying to create a new React app using create-react-app"
        .red
    );
    return false;
  }
  await installFrontEndPackages();
  await createFrontEndFileStructure();
  await addFrontEndFiles();
  await configClientPackageJSON();
  await createGitREADME();
  console.log("All done!".red);
};

// Creates directory for project at currentfolder/appName
const makeDirectory = () => {
  return new Promise(resolve => {
    shell.mkdir(appDirectory);
    console.log(appDirectory)
    resolve();
  });
};

// Change directory into newly made folder
const cdIntoNewFolder = () => {
  return new Promise(resolve => {
    shell.cd(appDirectory);
    resolve();
  });
};

// Configure the package.json for the project
const configPackageJSON = () => {
  return new Promise(resolve => {
    var file =
    {
      "name": appName,
      "version": "1.0.0",
      "license": "MIT",
      "main": "index.js",
      "scripts": {
        "base": "node index.js",
        "server": "nodemon index.js",
        "client": "npm run start --prefix client",
        "start": "concurrently --kill-others \"npm run base\" \"npm run client\"",
        "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
      },
      "dependencies": {},
      "engines": {
        "node": "8.9.3",
        "npm": "5.5.1"
      }
    }

    fs.writeFile(
      `${appDirectory}/package.json`,
      JSON.stringify(file, null, 2),
      function (err) {
        if (err) {
          return console.log(err);
        }
        resolve();
      }
    );
    resolve();
  });
};

// Initialize git 
const initializeGit = () => {
  return new Promise(resolve => {
    shell.exec(`git init`, () => {
      resolve();
    });
  });
};

// Add backend folders
const createBackEndFileStructure = () => {
  return new Promise(resolve => {
    shell.mkdir("services", "routes", "models", "middlewares", "config");
    resolve();
  });
};

// Install packages that will be used by the backend
const installBackEndPackages = () => {
  return new Promise(resolve => {
    console.log(
      "\nInstalling backend packages. This could take a moment.\n".cyan
    );
    shell.exec(
      `npm install --save express passport passport-google-oauth20 nodemon mongoose cookie-session concurrently`,
      () => {
        console.log("\nFinished installing backend packages\n".green);
        resolve();
      }
    );
  });
};


// Add backend boilerplate files.  
const addBackEndFiles = () => {
  return new Promise(resolve => {
    let promises = [];
    Object.keys(backendTemplates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        fs.writeFile(
          `${appDirectory}/${fileName}`,
          backendTemplates[fileName],
          function (err) {
            if (err) {
              return console.log(err);
            }
            res();
          }
        );
      });
    });
    Promise.all(promises).then(() => {
      resolve();
    });
  });
};

// Configure dev.js file with keys from app initialization
const configDev = () => {
  return new Promise(resolve => {
    var devFile = `module.exports = {
      googleClientID: "${googleId}",
      googleClientSecret: "${googleSecret}",
      mongoURI: "${mongoURI}",
      cookieKey: "${cookieKey}",
      redirectDomain: 'http://localhost:3000'
    };`;

    fs.writeFile(`${appDirectory}/config/dev.js`, devFile, function (err) {
      if (err) {
        return console.log(err);
      }
      resolve();
    });
    resolve();
  });
};

// Run CRA to generate basic front end application
const createReactApp = appName => {
  return new Promise(resolve => {
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, code => {
        console.log("Exited with code ", code);
        console.log("Create React App is loaded.".green);
        resolve(true);
      });
    } else {
      console.log("\nNo app name was provided.".red);
      console.log("\nProvide an app name in the following format: ");
      console.log("\ncreate-react-app ", "app-name\n".cyan);
      resolve(false);
    }
  });
};

// Install supplemental packages used in the front end
const installFrontEndPackages = () => {
  return new Promise(resolve => {
    console.log(
      "\nInstalling frontend package supplement.  This could take a moment.\n"
        .cyan
    );
    shell.cd("client");
    shell.exec(
      `npm install redux react-router react-redux redux-thunk react-router-dom axios http-proxy-middleware typescript`,
      () => {
        console.log("\nFinished installing frontend packages\n".green);
        resolve();
      }
    );
  });
};

// Edit the front end file structure and add folders.
const createFrontEndFileStructure = () => {
  return new Promise(resolve => {
    shell.cd("src");
    shell.exec(`rm App.js`);
    shell.exec(`rm App.test.js`);
    shell.mkdir(
      "actions",
      "components",
      "reducers",
      "utils",
    );
    resolve();
  });
};

// Add the front end template files
const addFrontEndFiles = () => {
  return new Promise(resolve => {
    let promises = [];
    Object.keys(frontendTemplates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        fs.writeFile(
          `${appDirectory}/${fileName}`,
          frontendTemplates[fileName],
          function (err) {
            if (err) {
              return console.log(err);
            }
            res();
          }
        );
      });
    });
    Promise.all(promises).then(() => {
      console.log("\nFront end files are created.\n".blue);
      resolve();
    });
  });
};

// Configure the client package.json
const configClientPackageJSON = () => {
  return new Promise(resolve => {
    var clientFile = require(`${appDirectory}/client/package.json`);
    clientFile.scripts = {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test --env=jsdom",
      "eject": "react-scripts eject",
    };

    fs.writeFile(
      `${appDirectory}/client/package.json`,
      JSON.stringify(clientFile, null, 2),
      function (err) {
        if (err) {
          return console.log(err);
        }
        resolve();
      }
    );
    resolve();
  });
};

const createGitREADME = () => {
  return new Promise(resolve => {
    shell.cd(`${appDirectory}`);
    shell.touch("README.md");

    let file =
      `
    # ${appName}

    ## [Live Demo]()
    
    ### Tech Used:
    
    #### Front End: React, Redux
    
    #### Back End: Node, Express
    `;

    fs.writeFile(
      `${appDirectory}/README.md`,
      file,
      function (err) {
        if (err) {
          return console.log(err);
        }
        resolve();
      }
    );
  })
};


run();
