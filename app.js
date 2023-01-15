const express = require('express');
const initDB = require('./db');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/RutasWeb'));
app.use('/productos', require('./routes/Productos'));
app.use(require('./routes/Personalizacion'));

app.use((req, res, next) => {
    res.status(404).render("404");
    next(new Error('404 not found'));
})

app.listen(port, () => {
    console.log('Server listening on port:', port);
    initDB();
})