const express = require('express');
const fs = require('fs');
const route = require('./routes/route');
var bodyParser = require('body-parser');
const app = express();
app.use('/', require('./pages'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');

app.post('/makedir', route.createfolder);
app.post('/makefile', route.createfile);
app.post('/writeinfile', route.writetofile);
app.post('/appfile', route.appenddata);
app.post('/readfile', route.read_file);
app.post('/removefile', route.deletefile);
app.post('/removefolder', route.deletefolder);
app.post('/show_files', route.showfiles);



app.listen(3000, () => {
    console.log("listening to port" + 3000);
});