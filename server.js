var express = require('express'),
    app = express(),
    path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Public/index.html'));
});

app.listen(3000);
console.log("Server running on port 3000");
