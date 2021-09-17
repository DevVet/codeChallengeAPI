# Code Challenge API

## Purpose

The purpose of this project is to provide users a RESTful API to query for code challenge problems

## Features/Requirements

- [ ] Language Agnostic
- [ ] Publicly Accessible
- [ ] Attribution to Question Author/Source
- [ ] Rate Limited3
- [ ] Choose level of question from easy to hard

## Usage

### Setup Development Environment

- Clone repo: `git clone https://github.com/DevVet/codeChallengeAPI.git`
- Enter repo: `cd codeChallengeAPI`
- Install dependanies: `yarn`,
- Ensure using correct version of node `nvm use` //Requires nvm
- Run development server to inistantiate SQLite database, then quit `yarn dev`
> SQLite does not support `sequelize db:create`
- Seed Development Database: `node_modules/.bin/sequelize db:seed:all`
- Run development server: `yarn dev`

### Endpoints

| Method  | Endpoint      | Parameter   | Purpose              | Example               | Example Response                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------- | ------------- | ----------- | -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **GET** | /v1/challenge |             | Get Random Challenge | /v1/challenge         | {"id":"3","level":"1","question":"With a given integral number n, write a program to generate a dictionary that contains (i, i\*i) such that is an integral number between 1 and n (both included) and then the program should print the dictionary. Suppose the following input is supplied to the program: \\n8 \\nThen, the output should be: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64}","source":"none"} |
| **GET** | /v1/challenge | level=[1-3] | Get Random Challenge | /v1/challenge?level=2 | {"id":"10","level":"2","question":"Write a program that accepts a sentence and calculate the number of upper case letters and lower case letters.\\nSuppose the following input is supplied to the program:nHello world!\\nThen, the output should be:\\nUPPER CASE 1\\nLOWER CASE 9","source":"none"}                                                                                                                   |
