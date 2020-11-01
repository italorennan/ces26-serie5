const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    fs = require('fs'),
    bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
      
// Rota para obter dados salvos
app.get('/getData', function(req, res) {
    fs.readFile(__dirname + "/form-data.json", "utf8", function(err, data) {
        var info = JSON.parse(data);
        res.end(JSON.stringify(info));
    });
});

// Rota para salvar dados enviados
app.post('/postData', function(req, res) {
    var newData = req.body;
    fs.readFile(__dirname + "/form-data.json", "utf8", function(err, data) {
        var obj = JSON.parse(data);
        obj.data.push(newData);
        var json = JSON.stringify(obj);
        fs.writeFile(__dirname + "/form-data.json", json, "utf8", function(err) {});
    });
    res.status(200);
});

// Estabelecimento do servidor na porta 3000
app.listen(port, () => console.log(`Listening on port ${port}`));