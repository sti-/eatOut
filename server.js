var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 5000);