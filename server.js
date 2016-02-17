var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('./app/config/mongoose');             //Inject all my needed middleware

var db = mongoose();

app.use(express.static('Public'));    //Use the .static method of express to allow access to our /Public folder

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Public/index.html'));    //Basic routing. When express receives a GET request at the base url, send the index.html file.
});

require('./app/routes/admin.routes.js')(app);
require('./app/routes/avalanche.routes.js')(app);
require('./app/routes/certificate.routes.js')(app);
require('./app/routes/content.routes.js')(app);
require('./app/routes/course.routes.js')(app);
require('./app/routes/school.routes.js')(app);
require('./app/routes/student.routes.js')(app);
require('./app/routes/teacher.routes.js')(app);
require('./app/routes/test.routes.js')(app);

app.listen(3000);   //Have express listen on port 3000 (localhost:3000)
console.log("Server running on port 3001");
