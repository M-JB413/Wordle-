const express = require('express');
const app=express();
const bodyParser = require('body-parser');

app.listen(3000);

const wd=require("random-words");
console.log(wd(4));
n=''
while(n.length !=5){
    n=wd({exactly:1,maxLength:5})[0]
}
final=n.toUpperCase();
js={'word':final}
app.get('/', function(req, res) {
    res.json(js);
})