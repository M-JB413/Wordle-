const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const wd=require("random-words");

app.set('view engine', 'ejs');
app.use(express.static('public'));

var n;


app.get('/', (req, res) => {
    do{
        n=wd({exactly:1,maxLength:5})[0]
    }while(n.length !=5)
    var final=n.toUpperCase();
    console.log(final);
    res.render('list',{word:final})
})

app.listen(process.env.PORT || 3000);