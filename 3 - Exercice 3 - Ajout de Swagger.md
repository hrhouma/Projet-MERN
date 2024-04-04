## Exercice #3 - Intégration de Swagger dans votre projet Node.js

### Objectif :
Intégrez Swagger dans votre application Node.js pour générer une documentation interactive de votre API. Cela facilitera la compréhension, le test et l'utilisation de l'API par les autres développeurs.

---

### 2- CORRECTION DÉTAILLÉE DE SWAGGER 

#### 1. Installation des Dépendances
Pour commencer, installez les paquets nécessaires à l'aide de npm :

```bash
npm install swagger-ui-express swagger-jsdoc
```

#### 2. Configuration de Swagger
Créez un fichier `swaggerConfig.js` à la racine de votre projet :

```javascript
// swaggerConfig.js
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation interactive de l\'API.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Serveur local',
    },
  ],
};

module.exports = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};
```

#### 3. Initialisation de Swagger dans votre Application
Intégrez Swagger dans votre application en modifiant le fichier `server.js` :

```javascript
// server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerConfig = require('./swaggerConfig');

const app = express();

const swaggerSpec = swaggerJSDoc(swaggerConfig);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Reste du code...
```

#### 4. Documenter Vos Routes
Dans les fichiers de vos routes, ajoutez des commentaires Swagger pour chaque route. Par exemple :

```javascript
// routes/categorieRoutes.js
/**
 * @openapi
 * /categorie:
 *   get:
 *     description: Liste toutes les catégories.
 *     responses:
 *       200:
 *         description: Succès.
 */
app.route('/categorie').get(categorie.list_all_categorie);
```

#### 5. Accéder à la Documentation Swagger
Une fois que Swagger est configuré, lancez votre serveur avec `node server.js` et accédez à `http://localhost:3000/api-docs`.

### Remarques Finales
- N'oubliez pas de mettre à jour la documentation Swagger à chaque modification de l'API.
- Utilisez les annotations Swagger pour documenter tous les aspects de vos routes.
- La documentation Swagger doit refléter fidèlement l'API pour être un outil efficace.

---

Prenez le temps de bien suivre chaque étape et de comprendre le rôle de chacun des éléments dans la création de la documentation de l'API. Cet exercice non seulement améliore la documentation de votre API, mais aussi fournit une base solide pour comprendre comment utiliser Swagger avec une application Node.js.
