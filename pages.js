const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.render('fileoperations');
});
app.get('/make_folder', (req, res) => {
    res.render('add_folder');
});

app.get('/make_file', (req, res) => {
    res.render('add_file');
});
app.get('/add_data', (req, res) => {
    res.render('add_data');
});
app.get('/write_data', (req, res) => {
    res.render('write_tofile');
});
app.get('/read_data', (req, res) => {
    res.render('read_data');
});

app.get('/rm_file', (req, res) => {
    res.render('rm_file');
});

app.get('/rm_folder', (req, res) => {
    res.render('rm_folder');
});

app.get('/show_folder', (req, res) => {
    res.render('read_folder');
});
module.exports = app;