const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mern-stack-tasks';
const URI = 'mongodb+srv://andylenincp:andylenincp@cluster0.x8mia.mongodb.net/mern-stack-tasks';

mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err))

module.exports = mongoose;