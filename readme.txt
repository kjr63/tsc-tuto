# Miten käännetään typescript koodi

We have following steps:

First you need to install typescript

npm install -g typescript
Create one file helloworld.ts

function hello(person){
   return "Hello, " + person;
}
let user = "Aamod Tiwari";
const result = hello(user);
console.log("Result", result)
Open command prompt and type the following command

npx tsc helloworld.ts
Again run the command

node helloworld.js
Result will display on console

{
  "name": "tsc-tuto",
  "version": "1.0.0",
  "description": "typescript tutorial",
  "main": "hello.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "kaj risberg",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "serve-favicon": "^2.5.0"
  },
  "devDependencies": {
    "typescript": "^4.1.6"
  }
}