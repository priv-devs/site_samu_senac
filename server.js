const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static front assets as they are in the repository
app.use('/front', express.static(path.join(__dirname, 'front')));

// Routes - render EJS views
app.get('/', (req, res) => {
    res.render('home', { title: 'SAMU 192 - Home', active: 'home' });
});

app.get('/sobre', (req, res) => {
    res.render('sobre', { title: 'Sobre | SAMU Dourados - MS', active: 'sobre' });
});

app.get('/cursos', (req, res) => {
    res.render('cursos', { title: 'Cursos | SAMU 192', active: 'cursos' });
});

app.get('/eventos', (req, res) => {
    res.render('eventos', { title: 'Eventos | SAMU Dourados - MS', active: 'eventos' });
});

// Fallback: serve static pages if requested by old links
app.get('/front/pages/:file', (req, res) => {
    const file = req.params.file;
    res.sendFile(path.join(__dirname, 'front', 'pages', file));
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});