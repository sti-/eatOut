var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/assets'));

app.listen(5000);