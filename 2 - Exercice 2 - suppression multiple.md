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
