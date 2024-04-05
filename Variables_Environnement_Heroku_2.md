# Guide complet sur la Configuration des Variables d'Environnement avec Heroku

Ce guide détaillé est conçu pour vous aider  à comprendre comment configurer et utiliser les variables d'environnement sur Heroku, étape par étape, avec des exercices pratiques.

## Introduction

Les variables d'environnement sont essentielles pour sécuriser et configurer les applications sans hardcoder des informations sensibles, comme des clés d'API ou des mots de passe, dans le code source. Sur Heroku, ces variables sont appelées *Config Vars*.

## Prérequis

Avant de commencer, assurez-vous de disposer des éléments suivants :

- Un compte Heroku. Créez-en un sur [Heroku](https://www.heroku.com/) si nécessaire.
- Heroku CLI installé sur votre machine. Consultez la documentation d'[installation de Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) pour plus de détails.
- Git installé sur votre ordinateur. Si ce n'est pas le cas, téléchargez-le depuis [le site officiel de Git](https://git-scm.com/downloads).

## Étape 1: Création de votre Application

1. **Initialisation de votre projet** : Créez un dossier pour votre projet et initialisez un dépôt Git :
   ```bash
   mkdir mon-projet
   cd mon-projet
   git init
   ```

2. **Création d'un simple serveur web (exemple en Node.js)** :
   - Installez Express.js : `npm init -y && npm install express`
   - Créez un fichier `index.js` et ajoutez le code suivant :
     ```javascript
     const express = require('express');
     const app = express();
     const port = process.env.PORT || 3000;

     app.get('/', (req, res) => {
       res.send('Bienvenue sur mon application Heroku!');
     });

     app.listen(port, () => {
       console.log(`Application lancée sur http://localhost:${port}`);
     });
     ```
   - Ajoutez un fichier `Procfile` à la racine de votre projet avec le contenu suivant : `web: node index.js`

### Exercice 1 :

- Créez une application comme décrit ci-dessus.
- Ajoutez et commitez vos changements à Git.

## Étape 2: Déploiement sur Heroku

1. **Connexion à Heroku CLI** : Ouvrez votre terminal et exécutez `heroku login`.

2. **Création d'une application Heroku** : Exécutez `heroku create` pour créer une nouvelle application sur Heroku.

3. **Déploiement** : Déployez votre application en poussant votre code sur Heroku avec Git :
   ```bash
   git add .
   git commit -m "Premier déploiement sur Heroku"
   git push heroku master
   ```

### Exercice 2 :

- Suivez les instructions pour déployer votre application sur Heroku.
- Accédez à l'URL fournie par Heroku pour voir votre application en action.

## Étape 3: Configuration des Variables d'Environnement

1. **Ajout de variables d'environnement via Heroku CLI** : Par exemple, pour définir une variable `MA_VARIABLE`, utilisez la commande suivante :
   ```bash
   heroku config:set MA_VARIABLE=valeur_de_ma_variable
   ```

2. **Accès aux variables dans votre application** : Modifiez votre `index.js` pour inclure la variable d'environnement :
   ```javascript
   app.get('/', (req, res) => {
     const maVar = process.env.MA_VARIABLE || 'Variable non définie';
     res.send(`Valeur de MA_VARIABLE : ${maVar}`);
   });
   ```

### Exercice 3 :

- Ajoutez une variable d'environnement `MA_VARIABLE` avec une valeur de votre choix.
- Modifiez votre application pour afficher la valeur de cette variable sur la page d'accueil.
- Redéployez sur Heroku et vérifiez que la valeur de la variable s'affiche correctement.

## Conclusion

Vous avez maintenant une compréhension de base de la façon de gérer les variables d'environnement sur Heroku, depuis la création et le déploiement d'une application jusqu'à la configuration et l'utilisation de variables d'environnement. Ces compétences sont essentielles pour développer des applications sécurisées et facilement configurables.
Ce guide augmenté inclut maintenant des instructions détaillées étape par étape, accompagnées d'exercices pratiques pour renforcer l'apprentissage. Il guide un débutant à travers le processus de création d'une application simple, son déploiement sur Heroku, et l'utilisation des variables d'environnement, en mettant l'accent sur les bonnes pratiques de sécurité et de configuration.
