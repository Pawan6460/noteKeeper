const mongoose = require('mongoose');
const mongoURI = "mongodb://0.0.0.0:27017/"

const connectMongoDB = () => {
    mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true }).then(() => 
    console.log('Connection Successfull')).catch((err) => console.log(err));
}

module.exports = connectMongoDB;