const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
.then(() => {
    console.log('Mongodb connn...');
}).catch((err) => {
    console.log('Mongodb conn err....',err);
})
