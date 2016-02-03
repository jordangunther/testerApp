var express = require('express'),
    app = express(),
    path = require('path');             //Inject all my needed middleware

app.use(express.static('Public'));    //Use the .static method of express to allow access to our /Public folder

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Public/index.html'));    //Basic routing. When express receives a GET request at the base url, send the index.html file.
});

app.listen(3000);   //Have express listen on port 3000 (localhost:3000)
console.log("Server running on port 3001");
