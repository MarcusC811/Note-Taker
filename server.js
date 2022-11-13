// const express = require('express');
// const path = require('path');

// const api = require('./routes/api');
// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.get('/api', api);
// app.use(express.static('public'));

// app.get('/notes', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/notes.html'))
// );

// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// );


// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );

const express = require('express');
const api = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes'); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', htmlRoutes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);