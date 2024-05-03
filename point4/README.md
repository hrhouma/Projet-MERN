# Référence : 
- https://dev.to/cyberwolves/jwt-authentication-with-access-tokens-refresh-tokens-in-node-js-5aa9

# Description :
- Dans ce projet, les rôles sont définis principalement dans le contexte de l'authentification et de l'autorisation pour l'application Node.js.
- Voici un aperçu des rôles et de leur gestion :

## 1- Modèle Utilisateur
- Le modèle `User` (dans le fichier `/models/User.js`) contient un champ `roles` qui spécifie les rôles attribués à chaque utilisateur.
- Les rôles disponibles sont `"user"`, `"admin"` et `"super_admin"`, avec `"user"` comme rôle par défaut.

## 2 - Fonctionnalité d'Authentification
- L'authentification est gérée principalement via des **tokens JWT** (JSON Web Tokens), avec deux types de tokens :
  - **Access Token** : Utilisé pour valider les utilisateurs lors de chaque demande. Expire généralement en 10-15 minutes.
  - **Refresh Token** : Utilisé pour renouveler les Access Tokens sans demander aux utilisateurs de se reconnecter. A une durée de vie plus longue, généralement d'un mois ou plus.

## 3 - Génération des Tokens
- La fonction `generateTokens` (dans le fichier `/utils/generateTokens.js`) génère les tokens JWT en incluant les rôles de l'utilisateur dans leur `payload`.
- Après la génération, le Refresh Token est stocké dans le modèle `UserToken`.

## 4 - Vérification du Refresh Token
- La fonction `verifyRefreshToken` (dans le fichier `/utils/verifyRefreshToken.js`) vérifie l'authenticité du Refresh Token.
- Si valide, elle renvoie les détails du token, y compris les rôles de l'utilisateur.

## 5 - Routes d'Authentification
- Les routes `/signUp` et `/logIn` (dans le fichier `/routes/auth.js`) gèrent respectivement l'inscription et la connexion des utilisateurs.
- Les Access Tokens et Refresh Tokens sont générés et renvoyés au client après une connexion réussie.

## 6 - Routes du Refresh Token
- Les routes `/api/refreshToken` (dans le fichier `/routes/refreshToken.js`) gèrent la génération d'un nouveau Access Token en utilisant un Refresh Token valide.
- La route `DELETE` gère la déconnexion en supprimant les tokens.

## 7 -  Conclusion
- Les rôles dans ce projet sont principalement utilisés pour définir les autorisations et gérer l'accès aux différentes parties de l'application.
- Les Access Tokens et Refresh Tokens jouent un rôle crucial dans la gestion sécurisée de ces autorisations.
