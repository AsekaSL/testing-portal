const app = require('./app.js');
const connect = require('./config/db.js')
require('dotenv').config();

const host = process.env.HOST_URL ||  "127.0.0.1";
const port = process.env.PORT || 3001;
const uri = process.env.MONGIDB_URI;


connect(uri);


const server = app.listen(port, host, () => {
    console.log(`Succsfully server running on port no : ${server.address().port}`)
})