const Bundler = require('parcel-bundler');
const Path = require('path');
const express = require('express');
const app = express();

// app.use(express.static(Path.join(__dirname, '/public/')));
// app.use('/css', express.static(Path.join(__dirname, '/node_modules/bootstrap/dist/css')));
// app.use('/js', express.static(Path.join(__dirname, '/node_modules/bootstrap/dist/js')));
// app.use('/js', express.static(Path.join(__dirname, '/node_modules/jquery/dist')));
// app.set('views', './src/views');
// app.set('view engine', 'ejs');
// app.get('/', (req, res) => {
//   res.render('index', {
//     title: 'Library',
//     nav: [
//       { link: '/books', title: 'Books' },
//       { link: '/authors', title: 'Authors' }
//     ]
//   });
// });

// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

const file = './../public/index.html'; // Pass an absolute path to the entrypoint here
const options = {}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on port 8080
app.listen(8080, () => {
  console.log('Up and running on port 8080');
});