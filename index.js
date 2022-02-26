require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./src/app')
var http = require("http").createServer(app);

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
        http.listen(PORT, () =>
        console.log(`Server Started on port ${PORT}`)
        );
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log(err);
    });
