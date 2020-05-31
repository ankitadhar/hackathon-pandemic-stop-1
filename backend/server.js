const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser'); 

require('dotenv');

const app = express();
const port = process.env.PORT || 5000;

app.set('trust proxy', true);
app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
const uri='mongodb+srv://ankitadhar:dbPassword@cluster0-nzmjf.mongodb.net/test?retryWrites=true&w=majority';
// console.log(uri);
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('connection to mongodb database connection established successfully');
});

const grievancesRouter = require('./routes/grievances');
const usersRouter = require('./routes/users');

app.use('/grievances',grievancesRouter);
app.use('/users',usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});