/*jshint node: true */
// ładujemy wykorzystywane moduły
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieSession = require('cookie-session');
const exphbs = require('express-handlebars');

// tworzymy i konfigurujemy obiekt aplikacji
const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
const secret = process.env.SECRET || '$uper $ecret';

app.set('views', __dirname + '/views');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// obsługa danych typu application/json
app.use(bodyParser.json());
// obsługa danych typu application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// obsługa sesji za pomocą ciasteczek
app.use(cookieSession({ secret: secret }));
// „serwery statyczne”
app.use(express.static(path.join(__dirname, 'public')));

// REST api
app.use('/', require('./controllers/main.js'));

// uruchamiamy aplikację
app.listen(port, () => {
    console.log("Serwer nasłuchuje na porcie " + port);
});
