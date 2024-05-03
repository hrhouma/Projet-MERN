# Références :
- https://medium.com/@felixpratama242/login-authentication-with-nodejs-7e56aaa3764a
- https://github.com/lixx21/NodeJS-login-auth
- Voici un exemple du fichier `.http` pour interagir avec les points de terminaison (endpoints) en français :

### `test.http`
```http
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

### Tester le point de terminaison /register
POST http://127.0.0.1:3000/register
Content-Type: application/json

{
    "username": "votre nom d'utilisateur",
    "email": "votre email",
    "password": "votre mot de passe"
}

### Tester le point de terminaison findUser
GET http://127.0.0.1:3000/findUser/<votre email>
```

Remplacez `<VOTRE_JETON>` et `<votre email>` par les valeurs appropriées.

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