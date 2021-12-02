const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const root = './';
const port = process.env.PORT || '3000';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, '/Angular/dist/FRatings-Angular')));
app.use('/api', routes);

/* other routes defined before catch-all */
app.get('/some-route', (req, res) => {
  res.send('ok')
})

/* final catch-all route to index.html defined last */
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/Angular/dist/FRatings-Angular/index.html'));
})

app.listen(port, () => console.log(`API running on localhost:${port}`));