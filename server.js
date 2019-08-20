var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine',  'html');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
	res.render('index');
} );

app.listen(port,()=> console.log(`listening on port ${port}`));