var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.set('view engine',  'html');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.render('index');
} );

app.post('/', (req,res) => {

	console.log(req.body);
});

app.listen(port,()=> console.log(`listening on port ${port}`));