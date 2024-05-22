**Partie 3 de l'examen : Intégration d'un Backend MongoDB avec votre Application React**

**Objectif :** Ajoutez un backend utilisant MongoDB à votre application React pour gérer les données du formulaire d'inscription. Vous avez la liberté de choisir la méthode la plus appropriée pour gérer les sessions utilisateurs après l'inscription.

**Instructions et conseils :**

1. **Configuration du Backend Node.js et Express :**
   - Développez un serveur backend avec Node.js et Express pour interagir avec une base de données MongoDB.
   - Ce serveur recueillera et stockera les données du formulaire d'inscription.

2. **Modèle de Données avec Mongoose :**
   - Créez un modèle `User` dans Mongoose qui correspond aux champs du formulaire :
     - `first_name` (Prénom)
     - `last_name` (Nom)
     - `email` (Email)
     - `phone_number` (Téléphone)
     - `street_address` (Adresse)
     - `post_code` (Code Postal)
     - `country` (Pays)

3. **Endpoint POST `/api/users` :**
   - Mettez en place un endpoint POST `/api/users` pour enregistrer les informations des utilisateurs dans MongoDB.
   - Validez les données avant l'enregistrement pour assurer la sécurité et la fiabilité.

4. **Gestion des Sessions Utilisateur :**
   - **Option 1 : Utilisation du Local Storage** : Si vous choisissez cette méthode, stockez l'ID de l'utilisateur dans le local storage après l'inscription pour identifier l'utilisateur dans les interactions futures avec le backend.
   - **Option 2 : Utilisation de Tokens (JWT)** : Vous pouvez aussi opter pour l'utilisation de tokens, comme JWT, pour gérer les sessions. Après l'inscription, retournez un JWT que l'application utilisera pour authentifier les requêtes subséquentes.
   - **Liberté de choix** : Vous avez la liberté de choisir la méthode qui vous semble la plus appropriée. Si vous trouvez une autre méthode qui convient mieux à vos besoins, vous êtes encouragés à l'explorer.

5. **Route `/merci/{name}` :**
   - Utilisez les informations de session (ID de local storage ou JWT) pour récupérer les données de l'utilisateur sur la page de remerciement `/merci/{name}`.
   - Affichez les informations pertinentes et permettez les modifications du `{name}` comme prévu.

**Consignes :**
   - Assurez-vous que le backend interagit correctement avec le frontend sans nécessiter de modifications majeures de l'interface utilisateur.
   - Testez toutes les fonctionnalités pour confirmer qu'elles répondent aux attentes de l'examen.

**Rendu :**
   - Votre code complet, incluant les ajustements du frontend pour l'intégration du backend et le code du backend, doit être soumis en suivant les directives de votre instructeur.
