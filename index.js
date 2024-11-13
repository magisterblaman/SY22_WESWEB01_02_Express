import 'dotenv/config';
import express from 'express';

let app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/hannes', function(request, response) {
	response.render('profile', {
		"name": "Hannes",
		"class": "Arbetarklass",
		"age": 20,
		"gender": "man",
		"pronouns": "han/honom",
		"occupation": "lärare"
	});
});

app.get('/sofia', function(request, response) {
	response.render('profile', {
		"name": "Sofia",
		"class": "Överklass",
		"age": 87,
		"gender": "kvinna",
		"pronouns": "hon/hen",
		"occupation": "pensionär"
	});
});

app.listen(process.env.PORT);