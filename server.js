var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
	name: String,
	email: String,
	msg: String,
	date: {type: Date, default: Date.now}
});


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
	var Client = mongoose.model('Client', contactSchema);
	var client = new Client({
		name: req.body.name,
		email: req.body.email,
		msg: req.body.msg
	});
	mongoose.connect('mongodb://localhost:27017/klipps', {useNewUrlParser: true});

	client.save().then(() => console.log('now idk'));
});

app.listen(port,()=> console.log(`listening on port ${port}`));