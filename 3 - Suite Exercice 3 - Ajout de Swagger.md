# 2 - Correction plus détaillée: 
- Il s'agit du même travail que dans les fichiers précédents et le fichier exercice 3 - Ajout de Swagger.md. Il s'agit juste d'une variante optionnelle plus détaillée.
- Veuillez l'ignorer si vous avez résussi l'ajout de Swagger.

## 1. Suppression en Masse (Delete Many)
Correction:

## Étape 1: Créer une Route pour la Suppression Totale
Dans votre fichier de routes (par exemple, categorieRoutes.js pour les catégories), ajoutez une nouvelle route pour gérer la suppression totale :

// categorieRoutes.js
// Autres routes...
app.route('/categories/deleteAll')
   .delete(categorie.delete_all_categories);

## Étape 2: Définir la Fonction de Contrôleur
Dans votre contrôleur (par exemple, categorieController.js), ajoutez une nouvelle méthode pour gérer cette requête :

// categorieController.js
// Autres méthodes...

exports.delete_all_categories = function(req, res) {
    Categorie.deleteMany({}, function(err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send({ message: 'Toutes les catégories ont été supprimées' });
        }
    });
};

Dans cet exemple, Categorie.deleteMany({}) est utilisé pour supprimer toutes les entrées dans la collection Categorie. L'objet vide {} passé en tant que premier argument signifie qu'il n'y a pas de critères de sélection, donc toutes les entrées sont visées.

## Étape 3: Tester

2- CORRECTION DÉTAILLÉE DE SWAGGER (EXERCICE 7)

Pour intégrer Swagger dans votre application Node.js et Express pour documenter votre API, vous pouvez suivre ces étapes détaillées :

1. Installation des Dépendances

D'abord, installez swagger-ui-express et swagger-jsdoc. Ces paquets vous permettront de générer et de servir la documentation de l'API Swagger.

npm install swagger-ui-express swagger-jsdoc

2. Configuration de Swagger

Ensuite, configurez Swagger dans votre application. Vous devez définir un document de configuration Swagger (souvent appelé swagger definition ou swagger spec) qui décrit votre API.

Créez un fichier de configuration Swagger, par exemple swaggerConfig.js :

// swaggerConfig.js

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'This is the API documentation for my application.',
  },
  servers: [
    {
      url: 'http://localhost:3000', // Replace with your server URL
      description: 'Local server',
    },
  ],
  // Ajoutez d'autres configurations ici si nécessaire
};

module.exports = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'], // Change this to the path where your route files are
};

## 3. Initialisation de Swagger dans votre Application

Dans votre fichier principal de l'application (par exemple server.js), importez et configurez swagger-ui-express et swagger-jsdoc avec le fichier de configuration que vous venez de créer.

// server.js 

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swaggerConfig'); // Le chemin vers votre fichier de configuration Swagger

const app = express();

// Initialisation de la documentation Swagger
const swaggerSpec = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Autres configurations d'Express...

## 4. Documenter Vos Routes

Dans vos fichiers de route, ajoutez des commentaires Swagger pour décrire chaque route. Par exemple :

/**
 * @openapi
 * /categorie:
 *   get:
 *     description: Retourne une liste de toutes les catégories.
 *     responses:
 *       200:
 *         description: Une liste de catégories.
 */
app.route('/categorie')
   .get(categorie.list_all_categorie);

Répétez cela pour toutes vos routes.

## 5. Accéder à la Documentation Swagger

Une fois que tout est configuré, démarrez votre serveur Node.js. Vous pouvez accéder à la documentation de votre API en visitant http://localhost:3000/api-docs dans votre navigateur (remplacez localhost:3000 par l'URL de votre serveur si différente).

Remarques Finales

- Assurez-vous de mettre à jour la documentation Swagger chaque fois que vous modifiez votre API.
- La documentation Swagger est très utile pour les développeurs qui consomment votre API et pour tester vos endpoints directement depuis l'interface utilisateur de Swagger.
- Swagger prend en charge de nombreuses options de configuration et de personnalisation. Vous pouvez approfondir ces aspects selon les besoins spécifiques de votre API.


## 6. ALLER PLUS LOIN et améliorer categorieRoutes.js
var cors = require('cors')
module.exports = function (app) {

  var categorie = require('../controllers/categorieController');
  app.use(cors())

  // Routes pour les catégories

  /**
   * @openapi
   * /categorie:
   *   get:
   *     description: Retourne une liste de toutes les catégories.
   *     responses:
   *       200:
   *         description: Une liste de catégories.
   */
  app.route('/categorie')
    .get(categorie.list_all_categorie)
    /**
     * @openapi
     * /categorie:
     *   post:
     *     description: Crée une nouvelle catégorie.
     *     responses:
     *       200:
     *         description: Catégorie créée avec succès.
     */
    .post(categorie.create_a_categorie);

  /**
   * @openapi
   * /categorie/{categorieId}:
   *   get:
   *     description: Retourne une catégorie spécifique par son ID.
   *     parameters:
   *       - in: path
   *         name: categorieId
   *         required: true
   *         description: ID de la catégorie à retrouver.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Une catégorie spécifique.
   */
  app.route('/categorie/:categorieId')
    .get(categorie.read_a_categorie)
    /**
     * @openapi
     * /categorie/{categorieId}:
     *   put:
     *     description: Met à jour une catégorie spécifique par son ID.
     *     parameters:
     *       - in: path
     *         name: categorieId
     *         required: true
     *         description: ID de la catégorie à mettre à jour.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Catégorie mise à jour avec succès.
     */
    .put(categorie.update_a_categorie)
    /**
     * @openapi
     * /categorie/{categorieId}:
     *   delete:
     *     description: Supprime une catégorie spécifique par son ID.
     *     parameters:
     *       - in: path
     *         name: categorieId
     *         required: true
     *         description: ID de la catégorie à supprimer.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Catégorie supprimée avec succès.
     */
    .delete(categorie.delete_a_categorie);

  ## Exercice 1 - Insertion multiple
  /**
   * @openapi
   * /categories:
   *   post:
   *     description: Crée plusieurs catégories.
   *     responses:
   *       200:
   *         description: Catégories créées avec succès.
   */
  app.route('/categories')
    .get(categorie.list_all_categorie)
    .post(categorie.create_many_categories)
  
  ## Exercice 2 - Suppression multiple
  /**
   * @openapi
   * /categories:
   *   delete:
   *     description: Supprime toutes les catégories.
   *     responses:
   *       200:
   *         description: Toutes les catégories ont été supprimées.
   */
    .delete(categorie.delete_all_categories)
};




## 7. TOUS FONCTIONNE BIEN DANS categorieRoutes.js SAUF LES POST, PUT (AVEC CORPS DE LA REQUETE)  - NE VOUS INQUIÉTEZ PAS !  CORRECTION
var cors = require('cors');

module.exports = function (app) {
    var categorie = require('../controllers/categorieController');
    app.use(cors());

    /**
     * @openapi
     * /categorie:
     *   get:
     *     description: Retourne une liste de toutes les catégories.
     *     responses:
     *       200:
     *         description: Une liste de catégories.
     */
    app.route('/categorie')
        .get(categorie.list_all_categorie)
        /**
         * @openapi
         * /categorie:
         *   post:
         *     description: Crée une nouvelle catégorie.
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               code:
         *                 type: string
         *                 description: Code de la catégorie.
         *               designation:
         *                 type: string
         *                 description: Désignation de la catégorie.
         *     responses:
         *       200:
         *         description: Catégorie créée avec succès.
         */
        .post(categorie.create_a_categorie);

    /**
     * @openapi
     * /categorie/{categorieId}:
     *   get:
     *     description: Retourne une catégorie spécifique par son ID.
     *     parameters:
     *       - in: path
     *         name: categorieId
     *         required: true
     *         description: ID de la catégorie à retrouver.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Une catégorie spécifique.
     */
    app.route('/categorie/:categorieId')
        .get(categorie.read_a_categorie)
        /**
         * @openapi
         * /categorie/{categorieId}:
         *   put:
         *     description: Met à jour une catégorie spécifique par son ID.
         *     parameters:
         *       - in: path
         *         name: categorieId
         *         required: true
         *         description: ID de la catégorie à mettre à jour.
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               code:
         *                 type: string
         *                 description: Code de la catégorie.
         *               designation:
         *                 type: string
         *                 description: Désignation de la catégorie.
         *     responses:
         *       200:
         *         description: Catégorie mise à jour avec succès.
         */
        .put(categorie.update_a_categorie)
        /**
         * @openapi
         * /categorie/{categorieId}:
         *   delete:
         *     description: Supprime une catégorie spécifique par son ID.
         *     parameters:
         *       - in: path
         *         name: categorieId
         *         required: true
         *         description: ID de la catégorie à supprimer.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Catégorie supprimée avec succès.
         */
        .delete(categorie.delete_a_categorie);

  ##  Exercice 1 - Insertion multiple
    /**
     * @openapi
     * /categories:
     *   post:
     *     description: Crée plusieurs catégories.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: array
     *             items:
     *               type: object
     *               properties:
     *                 code:
     *                   type: string
     *                   description: Code de la catégorie.
     *                 designation:
     *                   type: string
     *                   description: Désignation de la catégorie.
     *     responses:
     *       200:
     *         description: Catégories créées avec succès.
     */
    app.route('/categories')
        .get(categorie.list_all_categorie)
        .post(categorie.create_many_categories)
    
   ##  Exercice 2 - Suppression multiple
    
    /**
     * @openapi
     * /categories:
     *   delete:
     *     description: Supprime toutes les catégories.
     *     responses:
     *       200:
     *         description: Toutes les catégories ont été supprimées.
     */
        .delete(categorie.delete_all_categories);
};
