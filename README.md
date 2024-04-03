
#  1- Structure de Projet MEAN

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

# 2 - CRUD - Guide d'utilisation des CRUDs

- Explorez l'application via les CRUDs de base à l'aide de REST Client ou Postman. 
- Cette partie explique comment tester les opérations CRUD de l'application à l'aide de REST Client ou Postman.

## Prérequis

1. Assurez-vous que le serveur de l'application est en cours d'exécution.
2. Installez l'extension REST Client pour Visual Studio Code depuis [ici](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) ou utilisez Postman.

## Opérations CRUD

### 1. Récupérer toutes les catégories (GET ALL)

- **Fichier**: `T1-GETALL.rest`
- **Requête**:
  ```http
  GET http://localhost:3000/categorie/
  ```

### 2. Créer une seule catégorie (POST ONLY ONE)

- **Fichier**: `T2-POST_ONLY_ONE.rest`
- **Requête**:
  ```http
  POST http://localhost:3000/categorie
  Content-Type: application/json

  {
      "code": "XYZ",
      "designation": "TELECOM987"
  }
  ```

### 3. Créer plusieurs catégories (POST MANY)

- **Fichier**: `T3-POST_MANY.rest`
- **Requête**:
  ```http
  POST http://localhost:3000/categories
  Content-Type: application/json

  [
      {
          "code": "ABCDEFG",
          "designation": "TELECOM123"
      },
      {
          "code": "ABC",
          "designation": "TELECOM"
      },
      {
          "code": "ABC",
          "designation": "TELECOM"
      }
  ]
  ```

### 4. Supprimer une catégorie par ID (DELETE ONLY ONE BY ID)

- **Fichier**: `T4-DELETE_ONLY_ONE_BYID.rest`
- **Requête**:
  ```http
  DELETE http://localhost:3000/categorie/65af0d2e64755a7bb4f36756
  ```

### 5. Supprimer toutes les catégories (DELETE ALL)

- **Fichier**: `T5-DELETE_ALL.rest`
- **Requête**:
  ```http
  DELETE http://localhost:3000/categories
  ```

## Utilisation de REST Client

1. Ouvrez le fichier `.rest` correspondant à l'opération que vous souhaitez tester.
2. Cliquez sur le lien `Send Request` qui apparaît au-dessus de la requête dans le fichier.

## Utilisation de Postman

1. Ouvrez Postman et créez une nouvelle requête.
2. Sélectionnez la méthode appropriée (GET, POST, DELETE) et saisissez l'URL.
3. Pour les requêtes POST, ajoutez l'en-tête `Content-Type: application/json` et incluez le corps de la requête au format JSON dans la section `body`.
4. Envoyez la requête et observez la réponse.

## QUESTION #2

1 - Après avoir exécuté chaque opération CRUD, documentez les résultats et votre compréhension de la manière dont l'application traite chaque requête.
2 - Dessiner un diagramme qui illustre comment l'architecture complète de l'application (QUI APPELLE QUI ?) depuis l'appel  GET http://localhost:3000/categorie/
```

- Assurez-vous de remplacer `http://localhost:3000` par l'URL et le port réels si votre application s'exécute différemment.
- Écrire vos observations et posez des questions si vous rencontrez des difficultés ou des comportements inattendus.

