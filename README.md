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


# Annexe pour la point 3 :

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
