const express = require('express');
const app = express()
const routes = require('./routes')
const cors = require('cors');

require('./db');

app.use(cors());
app.use(express.json()) //this convert to json (req.body) data recieve the server
app.use('/api',routes)


app.listen(3000);
console.log('server listen in port',3000)