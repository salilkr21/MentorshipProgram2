const fs = require('fs');


module.exports.createfolder = (req, res) => {
    folder_name = req.body.folder_name;
    fs.mkdirSync(__dirname + '/' + folder_name);
    res.send(`A folder named ${folder_name} Created Successfully at ${__dirname}`);

};

module.exports.createfile = (req, res) => {
    folder_name = req.body.folder_name;
    file_name = req.body.file_name;
    filepath = __dirname + '/' + folder_name + '/' + file_name;
    fs.writeFileSync(filepath, "");
    res.send(`A file named ${file_name} Created Successfully at ${filepath}`);

};

module.exports.read_file = (req, res) => {
    folder_name = req.body.folder_name;
    file_name = req.body.file_name;
    filepath = __dirname + '/' + folder_name + '/' + file_name;
    let data = fs.readFileSync(filepath, "utf-8");
    res.send('The file is read successfully and the data in the file is: ' + data);

};

module.exports.appenddata = (req, res) => {
    data = req.body.wdata;
    folder_name = req.body.folder_name;
    file_name = req.body.file_name;
    filepath = __dirname + '/' + folder_name + '/' + file_name;
    fs.appendFileSync(filepath, data);
    res.send(`Data  successfully appended to file named ${file_name}  at ${filepath}`);

};

module.exports.deletefile = (req, res) => {
    folder_name = req.body.folder_name;
    file_name = req.body.file_name;
    filepath = __dirname + '/' + folder_name + '/' + file_name;
    fs.unlinkSync(filepath, "");
    res.send(`A file named ${file_name} deleted Successfully at ${filepath}`);

};

module.exports.writetofile = (req, res) => {
    data = req.body.wdata;
    folder_name = req.body.folder_name;
    file_name = req.body.file_name;
    filepath = __dirname + '/' + folder_name + '/' + file_name;
    fs.writeFileSync(filepath, data);
    res.send(`Data  successfully written to file named ${file_name}  at ${filepath}`);

};

module.exports.deletefolder = (req, res) => {

    folder_name = req.body.folder_name;
    filepath = __dirname + '/' + folder_name;
    fs.rmdirSync(filepath);
    res.send(`A folder named ${folder_name} deleted Successfully at ${filepath}`);

};

module.exports.showfiles = (req, res) => {
    folder_name = req.body.folder_name;
    filepath = __dirname + '/' + folder_name;
    let data = fs.readdirSync(filepath);
    res.send(`Files present in folder ${folder_name} are :::::::::: ${data}`);

};