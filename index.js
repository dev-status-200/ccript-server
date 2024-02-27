const express = require('express');
const app = express();
const mongoose = require('mongoose');
const key = 'mongodb+srv://ccriptUser:ccriptPassword@cluster0.rmji61r.mongodb.net/Cluster0?retryWrites=true&w=majority';
const cors = require('cors')

app.use(express.json());
app.use(cors("*"));

const todoRoutes = require('./routes/todos');

app.use("/todos", todoRoutes);

mongoose.connect(key)
.then(() => app.listen(8080, (req, res) => res.json({"Welcome Ccript Server"})))
.catch((err) => console.log(err));
