// Installing important file for setting up typescript for any project(PRODUCTION LEVEL)
// #Note: Use GIT BASH terminal to execute this commands

// 1.
// Command for installing tsconfig.json : tsc --init
// tsConfig.json : It is for tsConfig
// Typescipt configuration File

// 2.
// command for installing package.json : npm init -y
// Generate node package.json file
// For installing any NODE package manager or npm
// npm (Node Package Manager)

// In case of PRODUCTION we have two folder
// 1. src (source): src is where is write our code
// 2. dist (distribution): This is something which gets on to the production and that is being served to the end user

// command for installing this two folders: mkdir src dist // See how this space is used in the command to install more than one folder or package in a single command itself

// command to set ourDir: ./Dist in tsconfig file: tsc -W
// So that whatever index.ts file is written in src folder in typescript gets compiled into js file in index.js file in the dist folder set in the tsconfig file

// This command puts the compiler in the watch mode and it keeps on watching based on the tsconfig json and try to run this things there


// Installing lite-server package
// Command: npm i lite-server
// After installing it:
// Go to the package.json:
// scripts: "start": "lite-server"



