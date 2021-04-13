const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({msg: 'Hello, world'});
    console.log('Listening...')
})

app.listen(5000);