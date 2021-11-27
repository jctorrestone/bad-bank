# Bad Bank project

## Description/Motivation
The purpose of this project is only for practicing and improving development skills. It simulates a bank that lets you login with the user you created, deposit and withdraw money with that same user, and finally you have the ability to check the transactions you have made.

## Installation Guidelines
1. Make sure that you have node.js installed (npm included)
2. Install Mongodb and connect it to the port 27017. You can run it inside a docker container by using: docker run -p 27017:27017 --name badbank  -d mongo
3. Clone this project locally
4. Open the terminal and go to the folder of the project
5. Run: npm install, to install the dependencies.
6. Run: node index.js, then open another terminal and run: npm start
7. Go to http://localhost:3000/ and you will be able to see the app.
8. If you want to check the raw data you can go to http://localhost:8080/account/all

## Screenshots
![alt text](https://drive.google.com/file/d/1GQxqSZsbiKl81lnurPghdG8WX2v8STgF/view?usp=sharing)

## Technology used
1. Languages: HTML, JS and CSS.
2. Libraries: React, Bootstrap, Express and Mongodb.

## Features
1. Ability to create users
2. Ability to log in with the user created
3. Ability to deposit money
4. Ability to withdraw money
5. Ability to check the data of every user (Transactions that every user has made, is shown)
TODO: 
- Refactor the login with the use of firebase
- Authorized the express routes and hide the respective components that shouldn't be shown to unauthorized users.

## License
Copyright (c) 2021 José Torres

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
