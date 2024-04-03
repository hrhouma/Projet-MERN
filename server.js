var express = require('express');
var app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swaggerConfig');



var port = process.env.PORT || 3000;
var mongoose = require('mongoose');


// var Task = require('./api/models/todoListModel'); //created model loading here

var Categorie = require('./api/models/CategorieModel'); //created model loading here
var Produit = require('./api/models/ProduitModel'); //created model loading here


var bodyParser = require('body-parser');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/GestProdDB').then(() => console.log('Connected!'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const swaggerSpec = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// var routes = require('./api/routes/todoListRoutes'); //importing route
//routes(app); //register the route

var categorieRoute = require('./api/routes/categorieRoutes'); //importing route
var produitRoute = require('./api/routes/produitRoutes'); //importing route

categorieRoute(app);
produitRoute(app);

app.listen(port);


console.log('Gestion Produit RESTful API server started on: ' + port);