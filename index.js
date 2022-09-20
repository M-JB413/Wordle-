const express = require('express');
const app=express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.listen(3000);
app.use(express.static('public'));
const wd=require("random-words");
var n;


app.get('/', (req, res) => {
    do{
        n=wd({exactly:1,maxLength:5})[0]
    }while(n.length !=5)
    var final=n.toUpperCase();
    console.log(final);
    res.render('list',{word:final})
})