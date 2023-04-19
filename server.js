const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.listen(PORT, console.log(`Server is listening on port: ${PORT}`));
