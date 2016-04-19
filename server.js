var express = require('express'),
    app = express();

app.use(express.static('www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

var pg = require('pg');
var connectionString = "databaseurl";
pg.connect(connectionString, function(err, client, done) {
  client.query('SELECT * FROM salesforcedevorg.position__c', function(err, result) {
    done();
    if(err) return console.error(err);
    console.log(result.rows);
  });
});

