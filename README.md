# Partie 1 - Guide de démarrage du projet MEAN

Ce fichier `README.md` fournit des instructions étape par étape pour configurer, exécuter le projet MEAN et comprendre son architecture.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :
- Node.js (https://nodejs.org/)
- npm (inclus avec Node.js)
- MongoDB (https://www.mongodb.com/try/download/community)

## Installation et configuration

Suivez ces étapes pour mettre en place votre environnement de développement :

### Étape 1: Installation de MongoDB

Suivez les instructions d'installation sur le site officiel de MongoDB pour votre système d'exploitation.

### Étape 2: Démarrage de MongoDB

Après l'installation, assurez-vous que le service MongoDB est démarré. Voici les commandes généralement utilisées pour les systèmes Unix :

```bash
sudo service mongod start
```

Pour windows : 

```bash
net start MONGODB
```

### Étape 3: Cloner le projet

Clonez le dépôt de code depuis votre source ou téléchargez l'archive et extrayez-la dans un dossier local.

```sh
git clone https://github.com/hrhouma/Projet-MERN.git
cd Projet-MERN.git
```

### Étape 4: Installation des dépendances

Ouvrez une console ou un terminal et naviguez jusqu'au répertoire du projet, puis exécutez :

```bash
npm install
```

Cette commande installera toutes les dépendances nécessaires listées dans `package.json`.

### Étape 5: Lancement de l'application

Pour démarrer le serveur, exécutez :

```bash
node server.js
```

Votre serveur doit maintenant être opérationnel et accessible via `http://localhost:3000`.

### Étape 6 : Décrire les routes disponibles dans categorieRoutes.js - dossier routes (Les implémentations se trouvent dans categorieController.js - dossier controller)

![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/4b7e5e7b-5700-4c93-9af1-4facbe51b5d6)

![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/23ce53ac-99e4-4ae0-8a48-afbca457cbd3)

```bash
var cors = require('cors')

module.exports = function(app) {

    var categorie = require('../controllers/categorieController');
  app.use(cors())

    // categorie Routes
    app.route('/categorie')
      .get(categorie.list_all_categorie)
      .post(categorie.create_a_categorie);
  
  
    app.route('/categorie/:categorieId')
      .get(categorie.read_a_categorie)
      .put(categorie.update_a_categorie)
      .delete(categorie.delete_a_categorie);
  };
```

## Explication 

On a deux routes dans ce code, et chacune permet d'effectuer différentes actions (GET, POST, PUT, DELETE) sur des "catégories". 
- Voici un résumé  :

1. **Activation de CORS :** `var cors = require('cors')` et `app.use(cors())` permettent à votre serveur d'accepter les requêtes provenant de n'importe où sur internet, rendant votre API accessible à des sites web qui sont hébergés sur d'autres domaines.

2. **Route `/categorie` :** 
   - **GET :** Permet de récupérer la liste de toutes les catégories existantes.
   - **POST :** Permet de créer une nouvelle catégorie.

3. **Route `/categorie/:categorieId` :**
   - **GET :** Permet de récupérer les détails d'une catégorie spécifique, en utilisant son identifiant unique (`categorieId`).
   - **PUT :** Permet de mettre à jour une catégorie existante, également via son identifiant.
   - **DELETE :** Permet de supprimer une catégorie spécifique.

- En gros, vous avez une route pour travailler avec l'ensemble des catégories (`/categorie`) et une autre pour interagir avec des catégories spécifiques (`/categorie/:categorieId`). 
- Ces routes vous permettent de gérer (créer, lire, mettre à jour, supprimer) les catégories dans votre base de données ou votre système de stockage.

## Résumé des routes
Les routes sont :

- **GET /categorie :** Liste toutes les catégories.
- **POST /categorie :** Crée une nouvelle catégorie.
- **GET /categorie/:categorieId :** Obtient une catégorie spécifique par son ID.
- **PUT /categorie/:categorieId :** Met à jour une catégorie spécifique par son ID.
- **DELETE /categorie/:categorieId :** Supprime une catégorie spécifique par son ID.

## Architecture du projet

Prenez le temps de comprendre l'architecture du projet :

- `api/controllers` : Contient les contrôleurs qui traitent la logique métier.
- `api/models` : Inclut les schémas Mongoose pour les entités de la base de données.
- `api/routes` : Définit les routes de l'API qui relient les requêtes HTTP aux contrôleurs appropriés.
- `node_modules` : Dossier contenant toutes les librairies et dépendances du projet.
- `package.json` : Fichier de configuration de npm listant les dépendances et les scripts.
- `server.js` : Point d'entrée principal du serveur Node.js.
- `swaggerConfig.js` : Configuration pour la documentation API Swagger (À ajouter à l'étape #2 !!) .

## Vérification de la base de données

Pour vérifier que la base de données a été créée et est accessible, vous pouvez utiliser l'interface de ligne de commande de MongoDB ou des outils comme MongoDB Compass.

## Question # 1

1. Examinez le code source et familiarisez-vous avec la structure du projet.
2. Identifiez les points d'entrée de l'application (e.g., `server.js`).
3. Explorez comment les routes sont définies et traitées.
4. Regardez comment les modèles de données sont définis avec Mongoose.
5. Ajoutez des commentaires aux parties du code que vous trouvez complexes ou intéressantes.
6. Dessiner un diagramme qui illustre comment l'architecture complète de l'application (QUI APPELLE QUI ?)



- Ce `README` contient les étapes de base pour installer MongoDB, démarrer le serveur, et comprendre l'organisation du code source dans le cadre de votre projet MEAN.
- Il faut explorer et commenter le code pour renforcer leur compréhension.

# Étapes suivantes  : 

🚀 **1 - Exercice 1 - insertion multiple.md**

🌟 **1 - Suite Exercice 1 - insertion multiple.md**

🚀 **2 - Exercice 2 - suppression multiple.md**

🌟 **2 - Suite Exercise 2 - suppression multiple.md**

🚀 **3 - Exercice 3 - Ajout de Swagger.md**

🌟 **3 - Suite Exercise 3 - suppression multiple.md**

🌈 **4 - Passez à la branche # 2 !**


     
