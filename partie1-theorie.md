# Documentation API - Authentification avec Bearer Token

## Table des Matières
1. [Introduction](#introduction)
2. [Obtention d'un Jeton d'Authentification](#obtention-dun-jeton-dauthentification)
   - [Méthode /auth/token](#méthode-authtoken)
   - [Exemple de Réponse](#exemple-de-réponse)
3. [Appel à une Méthode Protégée par Authentification](#appel-à-une-méthode-protégée-par-authentification)
   - [Exemple d'Appel Authentifié](#exemple-dappel-authentifié)

# 1- Introduction
Un jeton d'authentification (bearer token) est une chaîne de caractères codée qui contient des informations concernant un utilisateur. Ce jeton est essentiel pour accéder aux méthodes protégées des APIs.

# 2 -  Obtention d'un Jeton d'Authentification
### Méthode /auth/token
Pour obtenir un jeton d'authentification, effectuez une requête HTTP POST à la méthode `/auth/token` en envoyant vos identifiants (généralement un identifiant et un mot de passe) dans le corps de la requête.

#### Exemple d'appel à /auth/token
```javascript
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

const body = { email: email, password: password };

const response = await fetch('https://monapi.com/auth/token', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify(body),
});

if (response.ok) {
  const data = await response.json();
  console.log(`Le jeton d'authentification: ${data.token}`);
} else {
  console.error('une erreur s'est produite');
}
```

### Exemple de Réponse
```json
{
    "token": "3TIFgdN3my829QYYa0fTJVsesuKH3-QvL3PmTsFIo…zMEaw"
}
```

# 3 - Appel à une Méthode Protégée par Authentification
Pour effectuer un appel à une méthode protégée, incluez le jeton d'authentification obtenu précédemment dans l'en-tête de votre requête HTTP sous le champ `authorization`.

### Exemple d'Appel Authentifié
```javascript
const bearerToken = 'bearer ' + token;

const response = await fetch('https://api.com/unemethode', {
  method: 'GET',
  headers: { authorization: bearerToken },
});

if (response.ok) {
  // Traiter la réponse reçue
} else {
  console.error('une erreur s'est produite');
}
```
