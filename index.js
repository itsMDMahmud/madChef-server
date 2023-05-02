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


app.get('/chefdata/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefdata.find(n => n.id ==id);
    res.send(selectedChef)
})


app.listen(port, () => {
    console.log(`Chefs are cooking on port: ${port}`);
})