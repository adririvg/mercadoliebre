const express = require('express');

const path = require('path');
const app = express();

//const publicPath =path.resolve(__dirname, '/public');
//app.use(express.static(publicPath));
app.use(express.static('public'));


app.listen(3000, ()=> console.log('Levantando un servidor con Express'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});
