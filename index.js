const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5500;

const chefdata = require('./data/chefdata.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Chefs are cooking')
});


app.get('/chefdata', (req, res) => {
    res.send(chefdata);
})


app.listen(port, () => {
    console.log(`Chefs are cooking on port: ${port}`);
})