const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({msg: 'Hello, world'});
    console.log('Listening...')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);