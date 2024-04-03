# Exercice #1 : Implémentation d'une Fonctionnalité d'Insertion Multiple

**Contexte :** Vous travaillez avec le code de base d'une API de gestion de catégories. Cette API vous permet actuellement de lister toutes les catégories, d'ajouter, lire, mettre à jour, et supprimer une catégorie spécifique.

**Code de base :**
```javascript
var cors = require('cors');

module.exports = function(app) {
    var categorie = require('../controllers/categorieController');
    app.use(cors());

    // categorie Routes
    app.route('/categorie')
        .get(categorie.list_all_categorie)
        .post(categorie.create_a_categorie);
    
    app.route('/categorie/:categorieId')
        .get(categorie.read_a_categorie)
        .put(categorie.update_a_categorie)
        .delete(categorie.delete_a_categorie);
};
```

**Objectif :** Votre mission est d'étendre cette API pour permettre l'insertion multiple de catégories à travers une nouvelle route.

**Instructions :**

1. Ajoutez une nouvelle route `/categories` à votre application pour gérer l'insertion multiple de catégories. Cette nouvelle route devra accepter une requête POST qui contient un tableau de catégories.

2. Dans le `categorieController`, implémentez la fonction `create_many_categories` qui sera appelée par la nouvelle route pour insérer plusieurs catégories. Cette fonction devra traiter le tableau de catégories reçu dans le corps de la requête POST et insérer chaque catégorie dans la base de données.

**Tâche supplémentaire :** Fournissez le code de l'implémentation de la fonction `create_many_categories` dans le `categorieController`.

**Conseil :** Utilisez des méthodes de votre choix pour insérer plusieurs documents en une seule opération dans la base de données. Assurez-vous de gérer correctement les erreurs et de renvoyer une réponse appropriée au client.

# Question pour l'exercice :

En vous basant sur le code de base fourni et les instructions ci-dessus, comment ajouteriez-vous la route pour l'insertion multiple et comment implémenteriez-vous la fonction `create_many_categories` dans le `categorieController` pour gérer cette opération ?
