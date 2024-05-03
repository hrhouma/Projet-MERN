# Démo de base en classe

- Ce guide vous aidera à explorer le mécanisme d'authentification basé sur JSON Web Token (JWT). 
- Suivez les étapes ci-dessous pour approfondir vos connaissances et mettre en pratique ces concepts à travers des exemples concrets.

## Étapes à suivre :

1. **Lire la théorie :**  
   Commencez par lire le document `partie1-theorie.md` pour comprendre les bases théoriques.

2. **Approfondir la pratique :**  
   Lisez ensuite `partie2-pratique1-APIS+Jeton.docx`, qui détaille davantage le mécanisme des jetons JWT (le même document `partie1-theorie.md`).

3. **Créer une petite application :**  
   Mettez la théorie en pratique avec une petite application `Hello JWT`. Suivez les instructions dans [ce tutoriel](https://www.geeksforgeeks.org/jwt-authentication-with-node-js/). (point3 : https://www.geeksforgeeks.org/jwt-authentication-with-node-js/) + **ANNEXE 0- 7 point3**

5. **Passer à une application intermédiaire :**  
   Ajoutez MongoDB à votre application pour une gestion plus sophistiquée des JWT. Le tutoriel suivant vous guidera : [Login Authentication with Node.js](https://medium.com/@felixpratama242/login-authentication-with-nodejs-7e56aaa3764a).

- https://medium.com/@felixpratama242/login-authentication-with-nodejs-7e56aaa3764a
- https://github.com/lixx21/NodeJS-login-auth

7. **Explorer les rôles :**  
   Les rôles sont essentiels dans l'authentification JWT. Découvrez leur utilité avec [ce tutoriel](https://dev.to/cyberwolves/jwt-authentication-with-access-tokens-refresh-tokens-in-node-js-5aa9).

8. **Créer une application complète :**  
   Pour une application complète avec JWT, suivez [ce guide](https://medium.com/swlh/authentication-how-to-create-a-nodejs-application-using-jwt-cee8bc5a89fe).

9. **Ressources supplémentaires :**  
   - [Node.js JWT Express.js Tutorial](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
   - [Gist: Node.js JWT Example](https://gist.github.com/nurmdrafi/e1c8b9562d906e736ba309bacf816491)

-------------------
# Annexe 0 pour le point 3 :

- Il faut remplacer le code dans index.js par le suivant (correction):
```js
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

// Configuration de l'accès global aux variables d'environnement
dotenv.config();

const PORT = process.env.PORT || 5000;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const TOKEN_HEADER_KEY = process.env.TOKEN_HEADER_KEY;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} ...`);
});

// Générer un token JWT
app.post("/user/generateToken", (req, res) => {
    const data = {
        time: Date(),
        userId: 12,
    };

    const token = jwt.sign(data, JWT_SECRET_KEY);
    console.log("Generated Token:", token); // Débogage : affiche le token généré
    res.send(token);
});

// Vérifier le token JWT
app.get("/user/validateToken", (req, res) => {
    try {
        const token = req.header(TOKEN_HEADER_KEY);
        console.log("Received Token:", token); // Débogage : affiche le token reçu

        if (!token) {
            return res.status(401).send("No token provided");
        }

        const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET_KEY);
        console.log("Verified Data:", verified); // Débogage : affiche les données vérifiées

        if (verified) {
            return res.send("Successfully Verified");
        } else {
            return res.status(401).send("Access Denied");
        }
    } catch (error) {
        console.error("Token Verification Error:", error); // Débogage : affiche l'erreur de vérification du token
        return res.status(401).send("Invalid Token");
    }
});

// Exécuter le serveur
console.log(`Starting server on port ${PORT}`);
```


# Annexe 1 pour le point 3 :

- Dans cet exemple, le token généré par `jwt.sign` inclut la date dans sa charge utile (payload). 
- Cela permet d'intégrer la date de création du token dans le jeton lui-même.
- Ainsi, la date peut être utilisée ultérieurement pour vérifier des informations telles que l'âge du token ou sa date de génération.
- Voici plus de détails :

Lors de la génération d'un token avec `jwt.sign`, on utilise un objet de données (payload) contenant une clé `time`, à laquelle est assignée la valeur de la date actuelle sous forme de chaîne de caractères (`Date()`). Cela ressemble à ceci :

```javascript
let data = {
    time: Date(),   // Représente la date et l'heure actuelles en tant que chaîne de caractères
    userId: 12      // Exemple d'identifiant utilisateur
}
```

Lorsque ce `data` est signé avec `jwt.sign(data, jwtSecretKey)`, il se passe les étapes suivantes :

1. **Encodage du payload** : L'objet `data` est transformé en chaîne JSON et encodé en Base64.

2. **Création du token** : Le JWT combine trois parties : 
   - **Header** : Contient des informations sur l'algorithme de cryptage.
   - **Payload** : Contient les données encodées, ici incluant la date et l'ID utilisateur.
   - **Signature** : Créée à partir du payload et du secret (`jwtSecretKey`), elle garantit l'intégrité du token.

3. **Résultat** : Le JWT est renvoyé sous la forme d'une chaîne de caractères avec les trois parties séparées par des points. Par exemple :
   ```
   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIE1heSAwMSAyMDI0IDE2OjM2OjU2IEdNVCswMjAwIiwidXNlcklkIjoxMiwiaWF0IjoxNjg1OTg5MzgxfQ.rDP7Og62dzO_e1e2TzKgT0FLZhHvn6_nZogIcN-XslI
   ```

- Incorporer la date dans le token permet, par exemple, de vérifier quand il a été créé et de le valider en fonction d'une durée limite (expiration).


-------------------
# Annexe 2 pour le point 3 :

- Pour envoyer une requête GET avec un jeton JWT dans Postman, tu devrais ajouter le jeton dans les en-têtes de la requête. 
- Voici comment procéder :

1. **Ouvre Postman :** Démarre Postman et crée une nouvelle requête.

2. **Choisis la méthode GET :** Assure-toi que la méthode sélectionnée soit `GET`.

3. **Entrez l'URL :** Tape l'URL du serveur, par exemple `http://localhost:5000/user/validateToken`.

4. **Ajoute le jeton dans l'en-tête :**
   - Clique sur l'onglet "Headers".
   - Ajoute une nouvelle clé d'en-tête avec le nom que ton application attend, généralement `Authorization` ou une valeur similaire stockée dans `TOKEN_HEADER_KEY`.
   - Comme valeur de l'en-tête, ajoute "Bearer " suivi du jeton JWT. Par exemple : `Bearer <ton_jwt>`.

5. **Envoie la requête :** Clique sur "Send" pour envoyer la requête.

- Si le jeton est valide, tu devrais recevoir la réponse `"Successfully Verified"`.

- Sinon aussi, vous pouvez utiliser un fetch (**Méthode2**)

-------------------
# Annexe 3 pour le point 3 :
- Pour tester la validation du token à l'aide d'une requête `GET` (avec `fetch`) en utilisant le token généré par votre endpoint `/user/generateToken`, suivez les étapes suivantes :

### Étape 1: Générer un token (requête POST)
Générez d'abord le token à l'aide de la requête POST `/user/generateToken`. Si vous le faites via Postman, copiez le token obtenu pour l'utiliser dans la validation suivante.

### Étape 2: Code JavaScript pour tester le GET avec fetch
- Créez un fichier `testToken.js` et insérez le code suivant :

```javascript
// Remplacez `<votre_token>` par le token généré précédemment
const token = '<votre_token>'; // Remplacez par le token généré

// Remplacez par l'URL de votre serveur
const validateTokenURL = 'http://localhost:5000/user/validateToken';

// Assurez-vous d'utiliser la clé d'en-tête correcte (ici `gfg_token_header_key`)
const tokenHeaderKey = 'gfg_token_header_key';

async function validateToken() {
  try {
    const response = await fetch(validateTokenURL, {
      method: 'GET',
      headers: {
        [tokenHeaderKey]: `Bearer ${token}`
      }
    });

    if (response.ok) {
      const data = await response.text();
      console.log(data); // Imprimez le message de succès
    } else {
      console.error(`Erreur: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error(errorText); // Imprimez le message d'erreur
    }
  } catch (error) {
    console.error('Erreur de validation du token:', error.message);
  }
}

// Appeler la fonction pour valider le token
validateToken();
```

### Étape 3: Exécution du script
1. Assurez-vous que votre serveur Node.js est en cours d'exécution.
2. Remplacez `<votre_token>` par le token généré dans l'étape 1.
3. Ensuite, exécutez le script avec Node.js:
   ```bash
   node testToken.js
   ```

- Cela devrait envoyer une requête `GET` au serveur pour valider le token et afficher le résultat dans la console.


-------------------
# Annexe 4 pour le point 3 :

- Pour tester l'API avec l'extension Rest Client de Visual Studio Code, vous pouvez suivre ces étapes :

### Étape 1 : Installer l'extension Rest Client
- Si vous ne l'avez pas encore installée, ouvrez Visual Studio Code et installez l'extension "REST Client" de Huachao Mao à partir du marché des extensions (VS Code Extension Marketplace).

### Étape 2 : Créer un fichier `.http`
1. Créez un nouveau fichier et donnez-lui l'extension `.http`, par exemple `testToken.http`.
2. Ajoutez-y les requêtes suivantes pour générer et valider le token :

#### Générer le token (Requête POST)
```http
### Generate JWT Token
POST http://localhost:5000/user/generateToken
Content-Type: application/json
```

#### Valider le token (Requête GET)
Après avoir obtenu le token de la première requête, ajoutez une seconde requête pour valider le token. Collez le token obtenu dans l'en-tête `gfg_token_header_key`.

```http
### Validate JWT Token
GET http://localhost:5000/user/validateToken
gfg_token_header_key: Bearer <votre_token> 
```

### Étape 3 : Exécuter les requêtes
1. Ouvrez le fichier `.http` dans Visual Studio Code.
2. Cliquez sur le bouton "Send Request" au-dessus de la première requête (`POST`), et copiez le token généré.
3. Collez le token généré dans la requête `GET` à la place de `<votre_token>`.
4. Cliquez sur "Send Request" au-dessus de la requête `GET` pour valider le token.

### Étape 4 : Vérifier les résultats
- Si le token est valide, vous devriez voir le message **Successfully Verified**.
- Si le token est invalide ou expiré, vous verrez un message d'erreur avec un code de statut 401.

- Assurez-vous que le serveur Node.js est en cours d'exécution et que les variables d'environnement sont correctement configurées.

-------------------
# Annexe 5 pour le point 3 :

- Je vais expliquer ici en détail le fonctionnement de la méthode de validation (La méthode `app.get("/user/validateToken", (req, res)`):

### Objectif de la méthode
La méthode `app.get("/user/validateToken", (req, res)` vise à valider un jeton JWT (JSON Web Token). Cela permet de vérifier si le jeton fourni est authentique et valide, confirmant ainsi que l'utilisateur est autorisé à accéder à une ressource protégée.

### Étapes de la méthode
1. **Récupérer le token de la requête** :
   ```javascript
   const token = req.header(TOKEN_HEADER_KEY);
   ```
   - La méthode `req.header(TOKEN_HEADER_KEY)` extrait le token des en-têtes de la requête HTTP.
   - `TOKEN_HEADER_KEY` est le nom de l'en-tête dans lequel on attend le token. Il est défini dans le fichier `.env`.

2. **Débogage** :
   ```javascript
   console.log("Received Token:", token);
   ```
   - Cette ligne permet de vérifier dans les logs si le serveur a reçu un token, et sa valeur exacte.

3. **Vérifier si le token est présent** :
   ```javascript
   if (!token) {
       return res.status(401).send("No token provided");
   }
   ```
   - Si `token` est `null` ou `undefined`, cela signifie que le client n'a pas fourni de token.
   - Dans ce cas, la réponse HTTP retourne une erreur 401 (Non autorisé) avec le message "No token provided".

4. **Valider le token** :
   ```javascript
   const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET_KEY);
   ```
   - La méthode `jwt.verify()` de `jsonwebtoken` tente de vérifier le token.
   - `token.replace('Bearer ', '')` supprime le préfixe `Bearer `, pour n'utiliser que le token brut.
   - `JWT_SECRET_KEY` est la clé secrète utilisée pour signer et vérifier le token.

5. **Débogage** :
   ```javascript
   console.log("Verified Data:", verified);
   ```
   - Cette ligne affiche les données déchiffrées du token, comme `userId`, `time`, etc., dans les logs pour les inspecter.

6. **Envoyer la réponse** :
   ```javascript
   if (verified) {
       return res.send("Successfully Verified");
   } else {
       return res.status(401).send("Access Denied");
   }
   ```
   - Si `jwt.verify()` a réussi, `verified` contient les données du token. Le serveur envoie alors une réponse confirmant que l'authentification a réussi.
   - Si `jwt.verify()` échoue, une erreur 401 est renvoyée avec "Access Denied".

7. **Gestion des erreurs** :
   ```javascript
   } catch (error) {
       console.error("Token Verification Error:", error);
       return res.status(401).send("Invalid Token");
   }
   ```
   - Si une exception est levée lors de `jwt.verify()`, le bloc `catch` intercepte cette exception.
   - Un message d'erreur est affiché dans les logs et une réponse 401 est envoyée.

### Pourquoi valider le token ?
Valider le token est crucial pour sécuriser les applications. Le token contient des informations sur l'utilisateur et permet au serveur de vérifier si l'utilisateur a le droit d'accéder à certaines ressources. Cela permet de :
- Prévenir l'accès non autorisé à des données sensibles.
- Authentifier les utilisateurs de manière sécurisée et efficace.
- S'assurer que seules les requêtes légitimes sont traitées.



-------------------
# Annexe 6 pour le point 3 : Analogie simple :

### La Méthode de Validation de JWT dans la Vie Réelle
Pensez au token JWT comme à un **ticket de cinéma**. Voici comment on peut comparer la validation d'un JWT à un ticket de cinéma :

1. **Génération du Ticket (JWT)** :
   - Imaginez que vous achetez un ticket de cinéma en ligne. Le site vous donne un ticket avec un code QR unique qui contient des informations comme le film, le numéro de siège, et l'heure.
   - De la même manière, le serveur génère un token JWT qui contient des informations sur l'utilisateur (comme un identifiant) et une heure d'expiration.

2. **Validation du Ticket à l'Entrée (JWT Validation)** :
   - Avant d'entrer dans le cinéma, un employé scanne le code QR sur votre ticket pour vérifier qu'il est valide. S'il est authentique, vous êtes autorisé à entrer. S'il est faux ou expiré, l'accès est refusé.
   - Dans l'application, le token JWT est envoyé au serveur. Le serveur utilise une clé secrète pour vérifier si le token est authentique (comme l'employé qui scanne le ticket). Si le token est valide, le serveur permet à l'utilisateur d'accéder à la ressource demandée. Sinon, l'accès est refusé.

3. **Pourquoi c'est Important** :
   - **Sécurité** : De la même façon que le cinéma ne veut pas que des gens entrent sans payer, l'application ne veut pas que des utilisateurs non autorisés accèdent aux ressources.
   - **Contrôle d'accès** : Tout comme le ticket indique quel film et quel siège l'utilisateur peut occuper, le token JWT peut contenir des informations sur ce que l'utilisateur peut faire (par exemple, voir un certain contenu, accéder à certains services).

### Comparaison avec l'Analogie du Cinéma
- **Ticket** : C'est le token JWT.
- **Informations du Ticket** : Les données contenues dans le token JWT, comme l'identifiant de l'utilisateur.
- **Scanner de Ticket** : Le serveur qui valide le token JWT.
- **Clé Secrète** : La méthode que l'employé utilise pour vérifier les tickets, ici c'est une clé secrète utilisée pour signer et vérifier le token.

- Cette analogie montre comment la validation d'un token JWT est un moyen de vérifier que l'utilisateur a accès aux ressources autorisées, de la même manière qu'un ticket de cinéma garantit que vous pouvez entrer et voir le film.

-------------------
# Annexe 7 pour le point 3 : Analogie 2 avec du code :

- Encore des exemples de la vie réelle pour comprendre le code:

### Objectif de la méthode `app.get("/user/validateToken")`
- L'objectif de cette méthode est de vérifier si un utilisateur possède un token JWT valide, et donc s'il a les droits nécessaires pour accéder à une ressource protégée. 

### Étape par étape avec des exemples concrets

1. **Récupération du Token (Ticket)**
   ```javascript
   const token = req.header(TOKEN_HEADER_KEY);
   console.log("Received Token:", token);
   ```
   - **Analogie** : Pensez à un contrôle de sécurité dans un aéroport. Le personnel demande votre carte d'embarquement (token) pour vérifier que vous avez le droit de monter à bord de l'avion (accéder à la ressource).
   - **Dans le code** : Le serveur récupère le token JWT depuis les en-têtes de la requête HTTP.

2. **Vérifier si le Token est Présent (Ticket manquant)**
   ```javascript
   if (!token) {
       return res.status(401).send("No token provided");
   }
   ```
   - **Analogie** : Si vous arrivez au contrôle de sécurité sans carte d'embarquement, vous n'êtes pas autorisé à passer.
   - **Dans le code** : Si le token n'est pas fourni, le serveur renvoie une erreur 401 (Non autorisé).

3. **Valider le Token (Vérification du Ticket)**
   ```javascript
   const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET_KEY);
   console.log("Verified Data:", verified);
   ```
   - **Analogie** : Le personnel vérifie votre carte d'embarquement pour voir si elle est authentique, en vérifiant les informations contenues sur la carte.
   - **Dans le code** : Le serveur utilise `jwt.verify()` pour vérifier que le token est valide, en utilisant la clé secrète `JWT_SECRET_KEY`. Si la validation réussit, les données du token sont récupérées.

4. **Envoyer une Réponse (Passage ou Refus)**
   ```javascript
   if (verified) {
       return res.send("Successfully Verified");
   } else {
       return res.status(401).send("Access Denied");
   }
   ```
   - **Analogie** : Si votre carte d'embarquement est valide, le personnel vous autorise à passer. Sinon, vous êtes refoulé.
   - **Dans le code** : Si le token est valide, le serveur renvoie une réponse confirmant l'accès. Sinon, il renvoie une erreur 401.

5. **Gestion des Erreurs (Ticket Invalide)**
   ```javascript
   } catch (error) {
       console.error("Token Verification Error:", error);
       return res.status(401).send("Invalid Token");
   }
   ```
   - **Analogie** : Si votre carte d'embarquement est contrefaite ou invalide, le personnel vous refuse l'accès et vous signale à la sécurité.
   - **Dans le code** : Si une erreur se produit lors de la validation du token, le serveur renvoie une erreur 401 indiquant que le token est invalide.

### Pourquoi valider un token ?
- **Contrôle d'accès** : Pour vérifier si un utilisateur a le droit d'accéder à une ressource protégée.
- **Sécurité** : Assure que les ressources sensibles ne sont accessibles qu'à ceux qui sont authentifiés et autorisés.

-------------------
# Annexe 8 pour le point 3 : Faire rapprocher le code à la vie réelle avec utilisation de EMAIL  + PASSWORD :


```javascript
PORT = 5000
EMAIL = rehoumahaythem@gmail.com
PASSWORD = haythemrehouma
```

![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/4eea616a-1176-4567-9e4b-e3ba53ba5a4a)
```javascript
node index.js
node testToken.js
test.http
```
![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/e20e1bca-6354-46f1-ad77-651a694b8b25)


1. **env**

```javascript
PORT = 5000
EMAIL = rehoumahaythem@gmail.com
PASSWORD = haythemrehouma
```
   - **Analogie** : Pensez à un contrôle de sécurité dans un aéroport. Le personnel demande votre carte d'embarquement (token) pour vérifier que vous avez le droit.

2. **index.js**

```javascript
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.PASSWORD;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} ...`);
});

// Generate JWT Token
app.post("/user/generateToken", (req, res) => {
    const data = {
        time: Date(),
        userId: 12,
    };

    const token = jwt.sign(data, SECRET);
    console.log("Generated Token:", token); // Debugging
    res.send(token);
});

// Middleware to verify JWT Token
function verifyToken(req, res, next) {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).send("No token provided");
        }

        const verified = jwt.verify(token.replace('Bearer ', ''), SECRET);
        req.user = verified; // Store the verified data for later use
        next(); // Continue to the next middleware
    } catch (error) {
        console.error("Token Verification Error:", error); // Debugging
        return res.status(401).send("Invalid Token");
    }
}

// Validate JWT Token
app.get("/user/validateToken", verifyToken, (req, res) => {
    console.log("Verified Data:", req.user); // Debugging
    res.send("Successfully Verified");
});

console.log(`Starting server on port ${PORT}`);
```
- **Analogie** : Pensez à un contrôle de sécurité dans un aéroport. Le personnel demande votre carte d'embarquement (token) pour vérifier que vous avez le droit.

3. **test.http**

```javascript
### Generate JWT Token
POST http://localhost:5000/user/generateToken
Content-Type: application/json

### Validate JWT Token

GET http://localhost:5000/user/validateToken
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIE1heSAwMSAyMDI0IDIwOjQ3OjE0IEdNVC0wNDAwIChFYXN0ZXJuIERheWxpZ2h0IFNhdmluZyBUaW1lKSIsInVzZXJJZCI6MTIsImlhdCI6MTcxNDYxMDgzNH0.S2M66BIG29-FTtB8YQ_ymMxUjR-QpK0_wbFkFpaG52o
```
- **Analogie** : Pensez à un contrôle de sécurité dans un aéroport. Le personnel demande votre carte d'embarquement (token) pour vérifier que vous avez le droit.


4. **testToken.js**

```javascript
// Replace with the token generated earlier
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIE1heSAwMSAyMDI0IDIxOjE2OjA4IEdNVC0wNDAwIChFYXN0ZXJuIERheWxpZ2h0IFNhdmluZyBUaW1lKSIsInVzZXJJZCI6MTIsImlhdCI6MTcxNDYxMjU2OH0.cvZogUmEAmHByvN7CSUA24h9Nq3xGtOZKVIhyKDp2vo';

// Replace with your server's URL
const validateTokenURL = 'http://localhost:5000/user/validateToken';

async function validateToken() {
  try {
    const response = await fetch(validateTokenURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}` // Set the token in the 'Authorization' header
      }
    });

    if (response.ok) {
      const data = await response.text();
      console.log(data); // Print the success message
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error(errorText); // Print the error message
    }
  } catch (error) {
    console.error('Token validation error:', error.message);
  }
}

// Call the function to validate the token
validateToken();
```
- **Analogie** : Pensez à un contrôle de sécurité dans un aéroport. Le personnel demande votre carte d'embarquement (token) pour vérifier que vous avez le droit.

-------------------
# Annexe 9 pour le point 3 : Faire rapprocher le code encore à la vie réelle avec utilisation de EMAIL  + PASSWORD :

## code serveur index.js

1. Change the verifyToken middleware to read the EMAIL header instead of Authorization.
2. Make sure to remove the Bearer prefix since it's not required for custom headers.

```javascript
const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET = process.env.PASSWORD;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} ...`);
});

// Generate JWT Token
app.post("/user/generateToken", (req, res) => {
    const data = {
        time: Date(),
        userId: 12,
    };

    const token = jwt.sign(data, SECRET);
    console.log("Generated Token:", token); // Debugging
    res.send(token);
});

// Middleware to verify JWT Token with custom header
function verifyToken(req, res, next) {
    try {
        const token = req.header('EMAIL'); // Read the custom header
        if (!token) {
            return res.status(401).send("No token provided");
        }

        const verified = jwt.verify(token, SECRET); // No 'Bearer' prefix
        req.user = verified; // Store the verified data for later use
        next(); // Continue to the next middleware
    } catch (error) {
        console.error("Token Verification Error:", error); // Debugging
        return res.status(401).send("Invalid Token");
    }
}

// Validate JWT Token
app.get("/user/validateToken", verifyToken, (req, res) => {
    console.log("Verified Data:", req.user); // Debugging
    res.send("Successfully Verified");
});

console.log(`Starting server on port ${PORT}`);

```
## code client testToken.js
```javascript
// Replace with the token generated earlier
const token = '<your_generated_token>'; // Use the actual token
const validateTokenURL = 'http://localhost:5000/user/validateToken';
const tokenHeaderKey = 'EMAIL';

async function validateToken() {
  try {
    const response = await fetch(validateTokenURL, {
      method: 'GET',
      headers: {
        [tokenHeaderKey]: token // Set the token in the 'EMAIL' header
      }
    });

    if (response.ok) {
      const data = await response.text();
      console.log(data); // Print the success message
    } else {
      console.error(`Error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error(errorText); // Print the error message
    }
  } catch (error) {
    console.error('Token validation error:', error.message);
  }
}

// Call the function to validate the token
validateToken();

```




## code client test.http
### Voici comment mettre à jour votre fichier `.http` (test.http) pour effectuer les tests :

**Générer le token JWT**
```http
POST http://localhost:5000/user/generateToken
Content-Type: application/json
```

**Valider le token JWT**
Assurez-vous d'utiliser l'en-tête `EMAIL` avec le token au lieu de l'en-tête `Authorization` :

```http
GET http://localhost:5000/user/validateToken
EMAIL: <votre_token_généré>
```

- Remplacez `<votre_token_généré>` par le token réel obtenu à partir de l'endpoint `/user/generateToken`.
- Cette configuration de test vous aidera à vérifier l'utilisation de l'en-tête `EMAIL` pour la validation des tokens JWT.

-------------------
# Annexe 10 pour le point 3 : Faire rapprocher le code encore à la vie réelle avec utilisation de EMAIL  + PASSWORD + PAGE HTML et clique bouton :
- voir le dossier **point3vhtml**

