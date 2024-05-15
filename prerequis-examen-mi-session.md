# Tutorial: Gestion des Utilisateurs avec Node.js, Express, et MongoDB

## Objectif : 
- Ce tutorial guide à travers les étapes de création d'une application utilisant Node.js et MongoDB pour la gestion des utilisateurs, incluant la création de routes avec Express, la gestion des erreurs, et l'utilisation des variables d'environnement.
- Nous allons détailler chaque étape de la création d'une application Node.js avec Express et MongoDB, en expliquant les concepts clés et en fournissant des exemples de code pour mieux comprendre la mise en place d'un système de gestion des utilisateurs robuste. 
- Vous pouvez continuer à ajouter des fonctionnalités ou ajuster le tutorial selon les besoins spécifiques de votre projet ou de votre cours.

## Prérequis

- Node.js installé
- MongoDB installé et en cours d'exécution
- Connaissances de base de JavaScript et des requêtes HTTP

## Étape 1: Configuration initiale

Installez les packages nécessaires en utilisant npm :

```bash
npm install express mongoose dotenv
```

Créez un fichier `.env` à la racine de votre projet pour stocker des variables sensibles telles que la chaîne de connexion à MongoDB :

```plaintext
DB_URI=mongodb://localhost:27017/maBaseDeDonnees
```

Dans votre fichier principal de l'application, ajoutez le code suivant pour configurer l'environnement :

```javascript
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie via variable d'environnement !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));
```

## Étape 2: Création d'une Route pour Ajouter des Utilisateurs

Utilisez Express pour créer une API permettant d'ajouter des utilisateurs à la base de données :

```javascript
const express = require('express');
const app = express();
const User = require('./models/user'); // Assurez-vous que le chemin est correct

app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(3000, () => console.log('Serveur démarré sur le port 3000'));
```

## Étape 3: Pourquoi Utiliser Mongoose?

Mongoose est un ODM (Object Data Modeling) qui facilite les interactions avec MongoDB grâce à :

- **Une interface de requêtes plus simple et structurée** : Mongoose permet de définir des modèles selon le schéma de la base de données, rendant les opérations CRUD plus intuitives.
- Validation des données : Mongoose offre des fonctionnalités de validation pour assurer que les données entrantes respectent le schéma défini.

## Étape 4: Gestion Globale des Erreurs

Pour éviter de répéter le code de gestion des erreurs dans chaque route, utilisez un middleware d'erreur :

```javascript
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message || 'Une erreur interne est survenue.',
    details: err
  });
});
```

- Ce middleware intercepte toutes les erreurs non gérées sur les routes précédentes et les gère de manière uniforme.


