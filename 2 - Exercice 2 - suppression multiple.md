### Exercice 2 : Création d'une Route pour la Suppression de Toutes les Catégories

**Objectif :** Développer une fonctionnalité au sein de votre API permettant la suppression de toutes les catégories avec une unique requête HTTP DELETE.

**Instructions :**

**Partie 1 : Ajout de la Route dans `categorieRoutes.js`**

1. **Ajout de la Route :** Commencez par ajouter une nouvelle route dans votre fichier `categorieRoutes.js` situé dans le dossier `routes`. Cette route doit être configurée pour accepter les requêtes DELETE à un endpoint spécifique, par exemple `/categories`, et appeler une fonction `delete_all_categories` qui sera définie dans la prochaine étape. La déclaration de la route pourrait ressembler à ceci :

    ```javascript
    app.route('/categories')
        .delete(categorie.delete_all_categories);
    ```

2. **Réflexion :** Avant de procéder, pensez à l'impact de cette fonctionnalité. Quelles mesures de sécurité ou de confirmation pourriez-vous envisager pour prévenir les suppressions accidentelles ?

**Partie 2 : Implémentation dans `categorieController.js`**

1. **Création de la Fonction :** Rendez-vous dans le fichier `categorieController.js` au sein du dossier `controllers`. Vous allez y implémenter la logique de la fonction `delete_all_categories`. Cette fonction doit utiliser la méthode `deleteMany` de votre modèle de catégories pour supprimer toutes les entrées. Voici un squelette de la fonction :

    ```javascript
    // Dans categorieController.js
    exports.delete_all_categories = function(req, res) {
        // Implémentez la suppression ici
    };
    ```

2. **Implémentation de la Logique de Suppression :** Complétez la fonction `delete_all_categories` pour qu'elle supprime effectivement toutes les catégories et renvoie une réponse appropriée au client, comme indiqué dans la structure fournie précédemment.

**Considérations supplémentaires :**

- **Gestion des erreurs :** Assurez-vous que votre implémentation gère correctement les cas d'erreur, en renvoyant par exemple un code d'état 500 si une erreur de serveur survient.
- **Feedback au Client :** Il est crucial de fournir un retour clair et précis au client après l'opération, par exemple en renvoyant un message de succès avec un code d'état 200.

**Livraison :** Vous devez fournir le code ajouté dans `categorieRoutes.js` pour la nouvelle route DELETE, ainsi que l'implémentation de la fonction `delete_all_categories` dans `categorieController.js`.

Cette approche vous guide à travers le processus de développement d'une nouvelle fonctionnalité d'API en deux étapes claires, commençant par la définition de la route et suivie par l'implémentation de la logique de contrôleur correspondante.

---
# Correction de l'exercice #2

Pour compléter l'exercice de suppression de toutes les catégories avec une unique requête HTTP DELETE, suivez les étapes de correction ci-dessous :

### Étape 1 : Ajout de la Route dans `categorieRoutes.js`

1. **Localisez le fichier de route :** Ouvrez le fichier `categorieRoutes.js` situé dans le dossier `routes` de votre projet.

2. **Ajoutez la nouvelle route :** Ajoutez une route pour gérer les requêtes DELETE à l'endpoint `/categories`. Cette route appellera la fonction `delete_all_categories` du contrôleur `categorieController`. Insérez le code suivant :

    ```javascript
    app.route('/categories')
        .delete(categorie.delete_all_categories);
    ```

### Étape 2 : Implémentation de la Fonction `delete_all_categories` dans `categorieController.js`

1. **Ouvrez le fichier du contrôleur :** Rendez-vous dans le fichier `categorieController.js` situé dans le dossier `controllers`.

2. **Ajoutez la fonction `delete_all_categories` :** Implémentez la fonction qui gère la suppression de toutes les catégories. Utilisez le modèle `Categorie` pour appeler `deleteMany` avec un objet de critères vide `{}` pour indiquer que toutes les entrées doivent être supprimées. Voici le code complet :

    ```javascript
    // Dans categorieController.js
    exports.delete_all_categories = function(req, res) {
        Categorie.deleteMany({}, function(err) {
            if (err) {
                // Si une erreur survient, renvoyez un code 500 avec le message d'erreur
                res.status(500).send(err);
            } else {
                // Si la suppression réussit, renvoyez un code 200 avec un message de confirmation
                res.status(200).send({ message: 'Toutes les catégories ont été supprimées.' });
            }
        });
    };
    ```

### Étape 3 : Testez Votre Route

Après avoir ajouté la route et implémenté la fonction dans le contrôleur, il est crucial de tester la nouvelle fonctionnalité pour s'assurer qu'elle fonctionne correctement.

- Utilisez un outil de test d'API comme Postman ou utilisez cURL pour envoyer une requête DELETE à l'endpoint `/categories`.
- Vérifiez la réponse reçue et confirmez que toutes les catégories ont été supprimées de votre base de données.

### Exemple de requête cURL pour tester :

```bash
curl -X DELETE http://localhost:3000/categories
```

Remplacez `http://localhost:3000` par l'URL de base de votre API si elle est différente.

En suivant ces étapes, vous aurez ajouté une fonctionnalité à votre API permettant de supprimer toutes les catégories en une seule requête, complétant ainsi l'exercice proposé.
