
# Structure de Projet MEAN

Ce fichier `README.md` décrit la structure de base du projet MEAN utilisé comme base pour notre laboratoire # 1.

## Rapprel de l'Arborescence de votre projet

```plaintext
backendmean/
│
├── api/
│   ├── controllers/
│   │   └── (fichiers de contrôleurs, ex. categorieController.js, produitController.js)
│   │
│   ├── models/
│   │   └── (fichiers de modèles, ex. categorieModel.js, produitModel.js)
│   │
│   └── routes/
│       └── (fichiers de routage, ex. categorieRoutes.js, produitRoutes.js)
│
├── node_modules/ (dossiers des modules node)
│
├── package-lock.json (verrouillage des versions des paquets pour npm)
│
├── package.json (informations sur le projet et ses dépendances)
│
├── server.js (fichier principal du serveur)
│
└── swaggerConfig.js (configuration pour la documentation Swagger)
```

## Explications

- `backendmean/` : Répertoire racine de l'application backend.
- `api/` : Contient les composants de l'API, divisés en contrôleurs, modèles et routes.
- `controllers/` : Contient les fichiers qui gèrent la logique de traitement des requêtes et des réponses de l'API.
- `models/` : Contient les schémas Mongoose pour les entités de l'application, comme les catégories et les produits.
- `routes/` : Définit les chemins d'accès (endpoints) de l'API qui relient les requêtes HTTP aux contrôleurs.
- `node_modules/` : Contient les packages installés par npm nécessaires au projet.
- `package-lock.json` et `package.json` : Fichiers de configuration pour npm qui incluent des informations sur le projet et détaillent ses dépendances.
- `server.js` : Point d'entrée de l'application Node.js qui configure et lance le serveur.
- `swaggerConfig.js` : Utilisé pour configurer la documentation Swagger, qui aide à décrire et documenter l'API de manière interactive.

## Utilisation

- Pour commencer à utiliser ce projet, installez les dépendances avec `npm install` et démarrer le serveur avec `npm start`. 
- Assurez-vous que MongoDB est installé et en cours d'exécution sur votre système pour que l'application puisse se connecter à la base de données.

![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/946799d2-f740-48df-8ed2-ede7293901be)

