# Partie 5.1 -Théorie différence entre jeton normal et jeton mis à jour
- Nous allons aborder le mécanisme de rafraîchissement de Token. Le démo est dans le fichier test.http dans l'appplication suivante (téléchargez p52.zip).

# Partie 5.2 - Tester l'application avec Rest Client (test.http) ==> p52.zip
- Nous n'avons pas d'interface front-end mais seulement test.http comme client.
### 1 - Vérifiez que vous avez mongodb.
### 2 - Ouvrir VScoe et ajoutez le fichier .env avec les informations suivantes: 

DB = mongodb://127.0.0.1:27017
SALT = 10
ACCESS_TOKEN_PRIVATE_KEY = Add your private key
REFRESH_TOKEN_PRIVATE_KEY = Add your private key

### 3 - npm install
### 4 - npm start
### 5 - Testez les points de terminaisons avec notre client test.http

- Ajout d'un utilisateur dans la base de données (Inscription) - pas de token généré
- Connexion ou authentification --> on vérifie que l'utilisateur existe et si c'est le cas , on génére un token (laisse-passer) pour lui.
- Rafraîchir le token (mécanisme de sécurité)
- Déconnexion ou suppression du Token.

# Partie 5.3 - Testez l'application avec une interface graphique en React

- cloner l'application p53.zip sur votre poste local
- code .
- npm install
- npm start
- 
- 
# Partie 5.4 -

# Partie 5.5 -

# Partie 5.6 -
