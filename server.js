//  OpenShift sample Node application
var express = require('express'),
    app     = express(),


app.engine('html', require('ejs').renderFile);


var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  res.render('index.html', { pageCountMessage : null});
});

app.listen(port, ip);
console.log('Server running on dsdahttp://%s:%s', ip, port);

module.exports = app ;
