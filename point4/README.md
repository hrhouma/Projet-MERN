# Références :
- https://medium.com/@felixpratama242/login-authentication-with-nodejs-7e56aaa3764a
- https://github.com/lixx21/NodeJS-login-auth
- Voici un exemple du fichier `.http` pour interagir avec les points de terminaison (endpoints) en français :

# Étape 1 - Télécharger le projet et l'ouvrir avec VSCode
```ssh
git clone https://github.com/lixx21/NodeJS-login-auth.git
```

# Étape 2 - Installer les dépedenecs avec npm install
```ssh
npm install
ou
npm i bcrypt, jsonwebtoken, mongodb, express, dotenv
```

# Étape 3 - Générer un mot de passe
```ssh
openssl rand -hex 32
```
- Il faut l'éxécuter sur un terminal linux et non pas avec Powershell.
  
# Étape 4 - Ouvrir mongoDB compass et créer la base de données et la collection 
![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/74cbd073-ccd6-4cbb-a70a-9bb03e446954)

# Étape 5 - Changer les variables d'environnement (dans le .env)
```ssh
JWT_SECRET_KEY = 3d2461dfdbddb42d94a7ad9e32694c90fe89efb166cd3ebfa7243d423a65d396
DB_URL = mongodb://127.0.0.1:27017
DB_COLLECTION_NAME = c1
DB_NAME = jwtdemo
```

# Étape 6 - Testez
### `test.http`
```http

### Tester le point de terminaison /register
POST http://127.0.0.1:3000/register
Content-Type: application/json

{
    "username": "votre nom d'utilisateur",
    "email": "votre email",
    "password": "votre mot de passe"
}

### Tester le point de terminaison /login
POST http://127.0.0.1:3000/login
Content-Type: application/json

{
    "email": "felixpratama12@gmail.com",
    "password": "filedeck1"
}

### Tester le point de terminaison /authenticate
GET http://127.0.0.1:3000/authenticate
Authorization: Bearer <VOTRE_JETON>


### Tester le point de terminaison findUser
GET http://127.0.0.1:3000/findUser/<votre email>
```

- Remplacez `<VOTRE_JETON>` et `<votre email>` par les valeurs appropriées.

### `script.js`
Pour compléter le fichier `.http`, voici un fichier de script `script.js` pour automatiser l'interaction avec ces points de terminaison :

```javascript
const axios = require('axios');

const enregistrerUtilisateur = async (nomUtilisateur, email, motDePasse) => {
    const reponse = await axios.post('http://127.0.0.1:3000/register', {
        username: nomUtilisateur,
        email,
        password: motDePasse
    });
    console.log(reponse.data);
};

const connecterUtilisateur = async (email, motDePasse) => {
    const reponse = await axios.post('http://127.0.0.1:3000/login', {
        email,
        password: motDePasse
    });
    console.log(reponse.data);
    return reponse.data.token; // Supposant que la réponse contient un jeton
};

const authentifierUtilisateur = async (jeton) => {
    const reponse = await axios.get('http://127.0.0.1:3000/authenticate', {
        headers: {
            'Authorization': `Bearer ${jeton}`
        }
    });
    console.log(reponse.data);
};

const trouverUtilisateur = async (email) => {
    const reponse = await axios.get(`http://127.0.0.1:3000/findUser/${email}`);
    console.log(reponse.data);
};

// Exemple d'utilisation
(async () => {
    // Enregistrer un utilisateur
    await enregistrerUtilisateur('votre nom d\'utilisateur', 'votre email', 'votre mot de passe');

    // Connecter l'utilisateur et obtenir le jeton
    const jeton = await connecterUtilisateur('votre email', 'votre mot de passe');

    // Authentifier l'utilisateur en utilisant le jeton
    await authentifierUtilisateur(jeton);

    // Trouver l'utilisateur par email
    await trouverUtilisateur('votre email');
})();
```

- Remplacez `'votre nom d'utilisateur'`, `'votre email'`, et `'votre mot de passe'` par les valeurs appropriées.

# Étape 7 - Exemple

```http
### Tester le point de terminaison /register
POST http://127.0.0.1:3000/register
Content-Type: application/json

{
    "username": "cesar123",
    "email": "cesar1996@gmail.com",
    "password": "mdp123"
}

### Tester le point de terminaison /login
POST http://127.0.0.1:3000/login
Content-Type: application/json

{
    "email": "cesar1996@gmail.com",
    "password": "mdp123"
}

### Tester le point de terminaison /authenticate
GET http://127.0.0.1:3000/authenticate
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VybmFtZSI6ImNlc2FyMTIzIiwiRW1haWwiOiJjZXNhcjE5OTZAZ21haWwuY29tIiwiaWF0IjoxNzE0NzU1MTIwLCJleHAiOjE3MTQ3NTg3MjB9.uGr5nHQq0QQ8wKv4OX0DxjbZ4Owa8hFn9NeDmmS7y2s



### Tester le point de terminaison findUser
GET http://127.0.0.1:3000/findUser/cesar1996@gmail.com
```
### NOTE: N'oubliez pas l'espace entre 

```http
Content-Type: application/json
#ESPACE
{
```

# Étape 8 - Chronologie des tests et explications utiles

Voici une explication détaillée de chaque point de terminaison et de l'ordre correct d'exécution :

### 1. Tester le point de terminaison `/register`
**Méthode :** `POST`
**Description :** Ce point de terminaison est utilisé pour enregistrer un nouvel utilisateur dans la base de données.

**Requête :**
```http
POST http://127.0.0.1:3000/register
Content-Type: application/json

{
    "username": "votre nom d'utilisateur",
    "email": "votre email",
    "password": "votre mot de passe"
}
```

**Explication :**
- Le corps de la requête contient les informations de l'utilisateur (`username`, `email`, et `password`).
- Les informations fournies sont envoyées au serveur, qui crée un nouvel enregistrement utilisateur dans la base de données.

### 2. Tester le point de terminaison `/login`
**Méthode :** `POST`
**Description :** Ce point de terminaison est utilisé pour authentifier un utilisateur existant en vérifiant ses informations d'identification et en renvoyant un jeton JWT.

**Requête :**
```http
POST http://127.0.0.1:3000/login
Content-Type: application/json

{
    "email": "felixpratama12@gmail.com",
    "password": "filedeck1"
}
```

**Explication :**
- Le corps de la requête contient l'email et le mot de passe de l'utilisateur.
- Si les informations d'identification sont valides, le serveur retourne un jeton JWT.
- Ce jeton est ensuite utilisé pour authentifier les requêtes suivantes.

### 3. Tester le point de terminaison `/authenticate`
**Méthode :** `GET`
**Description :** Ce point de terminaison est utilisé pour vérifier si un utilisateur est authentifié. 

**Requête :**
```http
GET http://127.0.0.1:3000/authenticate
Authorization: Bearer <VOTRE_JETON>
```

**Explication :**
- La requête nécessite que le jeton JWT obtenu à partir du point de terminaison `/login` soit inclus dans l'en-tête `Authorization`.
- Le serveur valide le jeton et répondra avec des informations si l'utilisateur est authentifié.

### 4. Tester le point de terminaison `findUser`
**Méthode :** `GET`
**Description :** Ce point de terminaison est utilisé pour récupérer les informations d'un utilisateur existant basé sur son email.

**Requête :**
```http
GET http://127.0.0.1:3000/findUser/<votre email>
```

**Explication :**
- `<votre email>` doit être remplacé par l'adresse email de l'utilisateur que vous souhaitez rechercher.
- Le serveur retourne les informations de l'utilisateur associé à cet email.

### Ordre d'exécution correct
Pour utiliser correctement ces points de terminaison :

1. **Enregistrer un utilisateur:** Commencez par créer un nouvel utilisateur via le point de terminaison `/register`.
2. **Se connecter:** Ensuite, utilisez le point de terminaison `/login` pour obtenir un jeton JWT pour l'utilisateur enregistré.
3. **Authentifier l'utilisateur:** Utilisez le point de terminaison `/authenticate` pour valider l'authenticité du jeton JWT obtenu.
4. **Trouver un utilisateur:** Enfin, utilisez le point de terminaison `findUser` pour obtenir des informations sur un utilisateur basé sur son email.


# Étape 9 - Comparaison à l'application facebook

Pour comprendre comment ces points de terminaison s'appliquent dans une application web réelle, prenons l'exemple de l'inscription et de la connexion à un compte Facebook. Voici comment ces points de terminaison seraient utilisés dans ce contexte :

### Étape 1 : Création d'un compte (Point de terminaison `/register`)
Lorsqu'un utilisateur souhaite créer un compte Facebook :
- **Interaction Web** : L'utilisateur accède à la page d'inscription de Facebook, remplit un formulaire avec ses informations personnelles (nom, adresse email, mot de passe, etc.).
- **Backend** : L'application envoie ces données au serveur via le point de terminaison `/register`.
- **Traitement Backend** : Le serveur vérifie la validité des informations, hache le mot de passe et enregistre les données de l'utilisateur dans la base de données.
- **Retour Web** : Le serveur renvoie une réponse indiquant que le compte a été créé avec succès.

### Étape 2 : Connexion au compte (Point de terminaison `/login`)
Lorsque l'utilisateur souhaite se connecter à Facebook :
- **Interaction Web** : L'utilisateur saisit son adresse email et son mot de passe dans le formulaire de connexion.
- **Backend** : Les informations sont envoyées au serveur via le point de terminaison `/login`.
- **Traitement Backend** : Le serveur vérifie l'email et le mot de passe de l'utilisateur en comparant le mot de passe haché dans la base de données.
- **Retour Web** : Si les informations sont valides, le serveur génère un jeton JWT et le renvoie au navigateur de l'utilisateur.

### Étape 3 : Accès aux fonctionnalités authentifiées (Point de terminaison `/authenticate`)
Lorsqu'un utilisateur authentifié souhaite accéder à des fonctionnalités réservées :
- **Interaction Web** : L'utilisateur essaie d'accéder à une fonctionnalité réservée (comme publier un statut ou voir des photos privées).
- **Backend** : Le navigateur de l'utilisateur envoie une requête au serveur, incluant le jeton JWT obtenu lors de la connexion.
- **Traitement Backend** : Le serveur valide le jeton via le point de terminaison `/authenticate`.
- **Retour Web** : Si le jeton est valide, le serveur autorise l'utilisateur à accéder à la fonctionnalité demandée.

### Étape 4 : Recherche d'un utilisateur (Point de terminaison `findUser`)
Lorsqu'un utilisateur souhaite trouver un ami sur Facebook :
- **Interaction Web** : L'utilisateur saisit le nom ou l'adresse email de son ami dans la barre de recherche.
- **Backend** : Le serveur reçoit la requête via le point de terminaison `findUser`.
- **Traitement Backend** : Le serveur recherche dans la base de données l'utilisateur associé à cet email.
- **Retour Web** : Le serveur renvoie les informations trouvées pour que l'utilisateur puisse visualiser le profil de son ami.

### Récapitulatif
Dans une application web réelle comme Facebook :
- Le point de terminaison `/register` permet de créer un nouveau compte.
- Le point de terminaison `/login` permet d'authentifier les utilisateurs et de leur fournir un jeton JWT.
- Le point de terminaison `/authenticate` protège l'accès aux fonctionnalités réservées en vérifiant le jeton JWT.
- Le point de terminaison `findUser` permet de rechercher et d'afficher des informations sur d'autres utilisateurs.
