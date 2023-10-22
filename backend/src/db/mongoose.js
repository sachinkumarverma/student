const mongoose = require('mongoose');
require('dotenv').config();

URL = process.env.MONGODB_URL

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // ssl: true,
})
    .then(() => {
        console.log("MongoDb connected successfully");
    }).catch((err) => {
        console.log(err);
    })