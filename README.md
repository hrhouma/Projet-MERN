# Démo de base en classe

- Ce guide vous aidera à explorer le mécanisme d'authentification basé sur JSON Web Token (JWT). 
- Suivez les étapes ci-dessous pour approfondir vos connaissances et mettre en pratique ces concepts à travers des exemples concrets.

## Étapes à suivre :

1. **Lire la théorie :**  
   Commencez par lire le document `partie1-theorie.md` pour comprendre les bases théoriques.

2. **Approfondir la pratique :**  
   Lisez ensuite `partie2-pratique1-APIS+Jeton.docx`, qui détaille davantage le mécanisme des jetons JWT (le même document `partie1-theorie.md`).

3. **Créer une petite application :**  
   Mettez la théorie en pratique avec une petite application `Hello JWT`. Suivez les instructions dans [ce tutoriel](https://www.geeksforgeeks.org/jwt-authentication-with-node-js/).

5. **Passer à une application intermédiaire :**  
   Ajoutez MongoDB à votre application pour une gestion plus sophistiquée des JWT. Le tutoriel suivant vous guidera : [Login Authentication with Node.js](https://medium.com/@felixpratama242/login-authentication-with-nodejs-7e56aaa3764a).

6. **Explorer les rôles :**  
   Les rôles sont essentiels dans l'authentification JWT. Découvrez leur utilité avec [ce tutoriel](https://dev.to/cyberwolves/jwt-authentication-with-access-tokens-refresh-tokens-in-node-js-5aa9).

7. **Créer une application complète :**  
   Pour une application complète avec JWT, suivez [ce guide](https://medium.com/swlh/authentication-how-to-create-a-nodejs-application-using-jwt-cee8bc5a89fe).

8. **Ressources supplémentaires :**  
   - [Node.js JWT Express.js Tutorial](https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs)
   - [Gist: Node.js JWT Example](https://gist.github.com/nurmdrafi/e1c8b9562d906e736ba309bacf816491)


# Annexe 1 pour la point 3 :

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



# Annexe 2 pour la point 3 :

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


# Annexe 3 pour la point 3 :
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
