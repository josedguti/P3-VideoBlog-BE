const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(
    process.env.DATABASE_URL,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
);


db.on('connected', function () {
    console.log(`connected to mongoDB at ${db.host}:${db.port}`);
});