This is an assessment project bootstrapped with [`npm init`](https://nodejs.org/en). for the purpose of getting hired by Ccript.

## Getting Started

This is a Node.js - Express project which servers as a backend-server for [This Repository](https://github.com/dev-status-200/ccript-client).

After cloning this repository, make sure to install all the dependencies

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:8080](http://localhost:8080/todos/) with your browser to see the result, which might be an empty array if no records created.

You can start editing the page by modifying `/index.js`. The server auto-updates as you edit the file & save due to [nodemon]([[https://v1.tailwindcss.com/](https://mongoosejs.com/](https://www.npmjs.com/package/nodemon))).

## Project Dependencies

1. [Express](https://expressjs.com/): To write less code & add more features to the plain Node.js server.
2. [Cors](https://www.npmjs.com/package/cors): To enable Cross-Origin requests for API calls.
3. [Mongoose](https://mongoosejs.com/): A better Object Model library than mongoDb, to easily get started with MongoDb.
3. [nodemon](https://www.npmjs.com/package/nodemon): A simple Re-starting scipt to handle frequent changes in the server.
4. No other dependency has been used, in order to keep the project as simple as possible.

## Database

MongoDb an Object Model (NoSQL) database has been adopted, as per the assessment requirements.

## Schema/Models

The project consists of only one table/model, which saves the To-do lists. with fillowing attributes:
1. task - To name the task.
2. status - To track the completion status.
3. Timestamps CreatedAt/updatedAt - Date & time of when tasks were created or edited.

## Code Structure

3. A Model, View, Controller pattern has been adopted [MVC](https://www.codecademy.com/article/mvc)
1. Express Framework has been adopded.
2. Every root has a parent root which is mentioned in `index.js` file, & all the sub roots have been placed in the `routes/` directory.
4. Conrollers/Functions for every route is placed in `controllers/` directory.

## Deployment

This repository is deployed on Cyclic.sh, which is one of the easiest & most suitable hosting for Node.js projects, without Credit-card requirement unlike Heroku.

This is the [URL](https://cute-lime-cygnet-veil.cyclic.app).
