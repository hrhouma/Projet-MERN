# Guide de Configuration des Variables d'Environnement sur Heroku

Configurer les variables d'environnement sur Heroku permet de gérer des éléments sensibles ou spécifiques à l'environnement, tels que les mots de passe de base de données et les clés d'API, sans les intégrer directement dans votre code. Suivez ce guide pour une démonstration pratique de A à Z.

## Prérequis

- **Compte Heroku**: Assurez-vous d'avoir un compte sur [Heroku](https://www.heroku.com/). Si vous n'en avez pas, inscrivez-vous.
- **Heroku CLI**: L'interface en ligne de commande de Heroku doit être installée sur votre machine. Pour l'installation, consultez [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
- **Git**: Votre système doit avoir Git installé. Téléchargez-le depuis [Git](https://git-scm.com/downloads) si nécessaire.

## Étape 1: Préparation de votre application

1. **Création du répertoire du projet**:
   Si vous n'avez pas déjà un répertoire pour votre projet, créez-en un.

2. **Initialisation d'un dépôt Git**:
   Ouvrez un terminal, naviguez vers le répertoire de votre projet, et exécutez:
   ```bash
   git init
   ```
3. **Création d'un `Procfile`**:
   À la racine de votre projet, créez un fichier nommé `Procfile` sans extension. Ce fichier doit contenir les commandes que Heroku utilise pour démarrer votre application. Par exemple, pour une application Node.js, vous pourriez avoir:
   ```
   web: node index.js
   ```

## Étape 2: Création et Configuration de l'Application sur Heroku

1. **Connexion à Heroku CLI**:
   Dans votre terminal, connectez-vous à Heroku CLI avec:
   ```bash
   heroku login
   ```
   Suivez les instructions pour ouvrir un navigateur et vous connecter.

2. **Création de l'application Heroku**:
   Toujours dans le terminal, créez une nouvelle application Heroku en exécutant:
   ```bash
   heroku create
   ```
   Cela générera un nom aléatoire pour votre application et l'ajoutera à votre compte Heroku.

3. **Déploiement de l'application**:
   Déployez votre application sur Heroku en utilisant Git. Commencez par ajouter tous les fichiers à Git, commitez-les, puis poussez-les sur Heroku :
   ```bash
   git add .
   git commit -m "Initial commit"
   git push heroku master
   ```

## Étape 3: Configuration des Variables d'Environnement

1. **Ajout de variables d'environnement**:
   Vous pouvez ajouter des variables d'environnement via le tableau de bord Heroku ou le CLI. Pour ajouter via le CLI, utilisez:
   ```bash
   heroku config:set NOM_DE_LA_VARIABLE=ma_valeur
   ```
   Répétez cette commande pour chaque variable d'environnement que vous souhaitez ajouter.

2. **Utilisation des variables d'environnement**:
   Dans votre application, accédez à ces variables en utilisant le processus d'environnement. Par exemple, en Node.js, vous accéderiez à `NOM_DE_LA_VARIABLE` avec `process.env.NOM_DE_LA_VARIABLE`.

## Conclusion

Vous avez maintenant configuré les variables d'environnement pour votre application sur Heroku. Ces variables peuvent être utilisées pour gérer de manière sécurisée les informations sensibles et spécifiques à l'environnement sans les intégrer directement dans votre code.
```

Ce guide README.md donne une vue d'ensemble de la façon de configurer et d'utiliser les variables d'environnement sur Heroku, en partant de la préparation de l'application jusqu'à l'utilisation des variables dans votre application. Vous pouvez ajuster les instructions spécifiques à l'environnement de votre application et aux langages de programmation utilisés.
