# Partie 5.1 -Théorie différence entre jeton normal et jeton mis à jour
- Nous allons aborder le mécanisme de rafraîchissement de Token. Le démo est dans le fichier test.http dans l'appplication suivante (téléchargez p52.zip).

# Partie 5.2 - Tester l'application avec Rest Client (test.http) ==> p52.zip
- Nous n'avons pas d'interface front-end mais seulement test.http comme client.
### 1 - Vérifiez que vous avez mongodb.
### 2 - Ouvrir VScoe et ajoutez le fichier .env avec les informations suivantes: 

```ssh
DB = mongodb://127.0.0.1:27017
SALT = 10
ACCESS_TOKEN_PRIVATE_KEY = Add your private key
REFRESH_TOKEN_PRIVATE_KEY = Add your private key
```
### 3 - npm install
### 4 - npm start
### 5 - Testez les points de terminaisons avec notre client test.http

- Ajout d'un utilisateur dans la base de données (Inscription) - pas de token généré
- Connexion ou authentification --> on vérifie que l'utilisateur existe et si c'est le cas , on génére un token (laisse-passer) pour lui.
- Rafraîchir le token (mécanisme de sécurité)
- Déconnexion ou suppression du Token.

# Partie 5.3 - Testez l'application avec une interface graphique en React

- Cloner l'application p53.zip sur votre poste local
- Saisir code .
- Ouvrir deux terminaux dans VScode un pour le backend (cd backend) et un pour le frontend (cd frontend).
- Terminal 1: cd backend et npm install, aussi pour le Terminal 2 : cd frontend et npm install
- Démarrer les serveurs pour le backend (node server.js) et pour le frontend (npm start)
- Points de terminaison : on a besoin juste du frontend : http://127.0.0.1:3000 (pour le déboguage + dev le point de terminaison frontend est important http://127.0.0.1:8080 (regardez test.http pour toutes les routes bachend)
- Amusez vous à créer des utilisateurs
- Juste pour la démo, j'ai généré des tokens pour l'inscription mais on ne devrait pas ! Les tokens sont générés uniquement lors de l'authentifaction (comme un laisser-passer). Sinon un refresh token est ajouté pour des raisons de sécurité.
-  Dans la partie suivante. nous allons ajouter des rôles ! (code p54.zip) 

# Partie 5.4 - Application avec les rôles ( Ajout d'un drop-down menu avec 3 rôles + affichage du rôle choisi dans la page)

- Cloner l'application p54.zip sur votre poste local
- Saisir code .
- Ouvrir deux terminaux dans VScode un pour le backend (cd backend) et un pour le frontend (cd frontend).
- Terminal 1: cd backend et npm install, aussi pour le Terminal 2 : cd frontend et npm install
- Démarrer les serveurs pour le backend (node server.js) et pour le frontend (npm start)
- Points de terminaison : on a besoin juste du frontend : http://127.0.0.1:3000 (pour le déboguage + dev le point de terminaison backend est important http://127.0.0.1:8080 (regardez test.http pour toutes les routes bachend)
- Remarquez que nous avons la possibilité de choisir le rôle au moment de la création de l'utilisateur !
- Amusez vous à créer des utilisateurs **AVEC des RôLES**
-  Dans la partie suivante, nous allons ajouter des interfaces qui apparaîtront en fonction de votre  rôle ! (code p55.zip) , par exemple une interaface super-admin !


# Partie 5.5 (Draft) -

# Partie 5.5 -

# Partie 5.6 - Exercice
- Créez 3 pages distinctes.
- Les 3 pages doivent être visible pour le super-admin.
- 2 pages uniquement seront visibles pour l'admin.
- 1 seule page sera visible pour l'utilisateur normal.


# Annexe : Problème entre 5.5 draft - 5.5

## 1 - Contexte
Lors de l'implémentation des fonctionnalités d'authentification pour une application Web, nous avons rencontré un problème concernant la génération et la transmission des jetons (tokens) d'authentification JWT (JSON Web Tokens) lors des processus de connexion et d'inscription des utilisateurs.

## 2 - Problème Spécifique
Bien que l'inscription (sign-up) des utilisateurs fonctionnait correctement avec la génération et la transmission des tokens, le processus de connexion (log-in) ne retournait pas les tokens attendus. Cela empêchait les utilisateurs de recevoir un retour valide contenant les jetons nécessaires pour les sessions authentifiées suivantes.

## 3 - Analyse Technique
Le problème résidait principalement dans la gestion asynchrone des tokens au sein de la route `/logIn` dans le serveur backend utilisant Node.js et Express. L'approche initiale ne prenait pas correctement en compte la nature asynchrone de la fonction `generateTokens`, qui est essentielle pour la création des JWTs basés sur des informations utilisateur. L'omission de l'utilisation de `await` lors de l'appel à cette fonction conduisait à un comportement non bloquant, ce qui signifie que la réponse était envoyée avant que les tokens ne soient réellement générés.

## 4 - Solution Apportée
Pour résoudre ce problème, nous avons ajusté la route `/logIn` pour utiliser correctement `await` avec l'appel à `generateTokens`. Cette modification a assuré que les tokens étaient entièrement générés et disponibles avant d'envoyer la réponse au client. De plus, nous avons implémenté une gestion d'erreur améliorée autour de la génération des tokens pour capturer et traiter les exceptions potentielles, offrant une réponse plus robuste et informative en cas d'erreur.

## 5 - Impact
Cette correction a permis de garantir la fiabilité du processus de connexion, en assurant que chaque utilisateur reçoit correctement ses tokens d'accès et de rafraîchissement après une authentification réussie, facilitant ainsi une gestion sécurisée des sessions utilisateur dans l'application.
