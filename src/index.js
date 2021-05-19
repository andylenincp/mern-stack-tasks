const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');

// Initializations
const app = express();

// Settings 
app.set('title', 'mern-stack-tasks');
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/task.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), () => {
    console.log(`${app.get('title')} listening at the port ${app.get('port')}`);
});