var express = require('express'),
    app = express();

app.get('/', () => {});

app.listen(3000);
console.log("Server running on port 3000");