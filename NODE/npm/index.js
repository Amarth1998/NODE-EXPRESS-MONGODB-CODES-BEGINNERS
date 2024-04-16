// // run command to npm init 

// npm init is a command used in Node.js projects to initialize a new Node.js project. When you run npm init, it guides you through a series of prompts where you can provide information about your project, such as its name, version, description, entry point, test command, repository URL, keywords, author, and license. Once you've answered these prompts, npm init creates a package.json file in your project directory with the provided information. The package.json file is crucial for managing dependencies and scripts for your Node.js project.

// PS C:\Users\amart\OneDrive\Desktop\Node js\thaapa\npm> npm init
// This utility will walk you through creating a package.json file.
// It only covers the most common items, and tries to guess sensible defaults.

// See `npm help init` for definitive documentation on these fields
// and exactly what they do.

// Use `npm install <pkg>` afterwards to install a package and
// save it as a dependency in the package.json file.

// Press ^C at any time to quit.
// package name: (npm)
// version: (1.0.0)                                                      
// description: npm learn
// entry point: (index.js)                                               
// test command:                                                         
// git repository:                                                       
// keywords:                                                             
// author: amarth                                                        
// license: (ISC)                                                        
// About to write to C:\Users\amart\OneDrive\Desktop\Node js\thaapa\npm\package.json:

// {
//   "name": "npm",
//   "version": "1.0.0",
//   "description": "npm learn",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "amarth",
//   "license": "ISC"
// }


// Is this OK? (yes)

// package.json file creat 

// we install chalk module npm install chalk 
//error solution -npm install  chalk@4.1.2


// const chalk = require("chalk");
// console.log(chalk.green.inverse('Hello world!'));



// we install npm i validator 
// const validator = require("validator")
// const res=validator.isEmail("amarth@gmail.com")
// console.log(res); //true




const chalk = require("chalk");
const validator = require("validator")
const res =validator.isEmail("amarth@gmail.com")
console.log(res ? chalk.green.inverse(res):chalk.red.inverse(res)); //true
//true
