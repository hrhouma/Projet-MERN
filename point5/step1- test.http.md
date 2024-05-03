# Tester l'application : 
- Pour tester les points de terminaison à l'aide d'un client REST, vous pouvez créer un fichier `.http` qui inclut des requêtes séquentielles.
- Dans le contexte de l'authentification JWT avec des jetons d'accès et de rafraîchissement dans Node.js, vous pouvez suivre cette séquence :

### 1. Inscription
Utilisez cette requête pour inscrire un nouvel utilisateur.
```http
### Inscription
POST http://localhost:8080/api/signUp
Content-Type: application/json

{
  "userName": "utilisateurtest",
  "email": "utilisateurtest@example.com",
  "password": "MotdePasse123!"
}
```

### 2. Connexion
Utilisez cette requête pour connecter l'utilisateur créé ci-dessus.
```http
### Connexion
POST http://localhost:8080/api/logIn
Content-Type: application/json

{
  "email": "utilisateurtest@example.com",
  "password": "MotdePasse123!"
}
```

### 3. Rafraîchir le jeton
Utilisez le jeton de rafraîchissement obtenu à partir de la requête de connexion précédente pour obtenir un nouveau jeton d'accès.
```http
### Rafraîchir le jeton
POST http://localhost:8080/api/refreshToken
Content-Type: application/json

{
  "refreshToken": "votre-refresh-token"
}
```

### 4. Déconnexion
Utilisez le jeton de rafraîchissement pour déconnecter l'utilisateur.
```http
### Déconnexion
DELETE http://localhost:8080/api/refreshToken
Content-Type: application/json

{
  "refreshToken": "votre-refresh-token"
}
```

### Utilisation :
1. Copiez le code dans un fichier `.http`.
2. Remplacez les URL et les jetons par les valeurs correctes.
3. Ouvrez le fichier dans votre client REST (par exemple, Visual Studio Code avec l'extension REST Client).
4. Exécutez les requêtes de manière séquentielle pour tester l'API.

# Code test.http complet

Voici votre fichier `.http` complet :

```http
### Inscription
POST http://localhost:8080/api/signUp
Content-Type: application/json

{
  "userName": "utilisateurtest",
  "email": "utilisateurtest@example.com",
  "password": "MotdePasse123!"
}

### Connexion
POST http://localhost:8080/api/logIn
Content-Type: application/json

{
  "email": "utilisateurtest@example.com",
  "password": "MotdePasse123!"
}

### Rafraîchir le jeton
POST http://localhost:8080/api/refreshToken
Content-Type: application/json

{
  "refreshToken": "votre-refresh-token"
}

### Déconnexion
DELETE http://localhost:8080/api/refreshToken
Content-Type: application/json

{
  "refreshToken": "votre-refresh-token"
}
```

1. Remplacez les URL et les jetons par les valeurs correctes.
2. Sauvegardez ce code dans un fichier `.http`.
3. Ouvrez le fichier dans un éditeur supportant les requêtes HTTP (comme Visual Studio Code avec l'extension REST Client).
4. Exécutez les requêtes séquentiellement pour tester les points de terminaison.
