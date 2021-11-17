const express = require('express');
const router = require('./config/router');

const app = express();
const port = 3456;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', router);

app.listen(port, () => console.log(`Port ${port} is up and running`));
