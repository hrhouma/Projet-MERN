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

Pour vérifier l'état de MongoDB :

```bash
sudo service mongod status
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

## Architecture du projet

Prenez le temps de comprendre l'architecture du projet :

- `api/controllers` : Contient les contrôleurs qui traitent la logique métier.
- `api/models` : Inclut les schémas Mongoose pour les entités de la base de données.
- `api/routes` : Définit les routes de l'API qui relient les requêtes HTTP aux contrôleurs appropriés.
- `node_modules` : Dossier contenant toutes les librairies et dépendances du projet.
- `package.json` : Fichier de configuration de npm listant les dépendances et les scripts.
- `server.js` : Point d'entrée principal du serveur Node.js.
- `swaggerConfig.js` : Configuration pour la documentation API Swagger.

## Vérification de la base de données

Pour vérifier que la base de données a été créée et est accessible, vous pouvez utiliser l'interface de ligne de commande de MongoDB ou des outils comme MongoDB Compass.

## Tâches pour les étudiants

1. Examinez le code source et familiarisez-vous avec la structure du projet.
2. Identifiez les points d'entrée de l'application (e.g., `server.js`).
3. Explorez comment les routes sont définies et traitées.
4. Regardez comment les modèles de données sont définis avec Mongoose.
5. Ajoutez des commentaires aux parties du code que vous trouvez complexes ou intéressantes.




- Ce `README` contient les étapes de base pour installer MongoDB, démarrer le serveur, et comprendre l'organisation du code source dans le cadre de votre projet MEAN.
- Il faut explorer et commenter le code pour renforcer leur compréhension.

Maintenant passez à la branche # 2 !
