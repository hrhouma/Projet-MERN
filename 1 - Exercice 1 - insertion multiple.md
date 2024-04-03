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

En vous basant sur le code de base fourni et les instructions ci-dessus, comment ajouteriez-vous la route `/categories` à votre fichier `categorieRoutes.js` pour l'insertion multiple et comment implémenteriez-vous la fonction `create_many_categories` dans le `categorieController.js` pour gérer cette opération ?

---
# Réponse Exercice # 1 : 

Suivez ces étapes détaillées :

## Étape 1 : Ajout de la Nouvelle Route dans `categorieRoutes.js`

1. Ouvrez votre fichier de routes, nommé `categorieRoutes.js`.

2. Ajoutez la route `/categories` qui gère à la fois les méthodes GET pour lister toutes les catégories (fonctionnalité déjà existante) et POST pour l'insertion multiple.
3. Le code ressemblerait à ceci :

```javascript
app.route('/categories')
    .get(categorie.list_all_categorie) // Cette ligne reste inchangée.
    .post(categorie.create_many_categories); // Nouvelle méthode à implémenter.
```

## Étape 2 : Implémentation de la fonction `create_many_categories` dans `categorieController.js`

1. Ouvrez votre fichier `categorieController.js`.

2. Ajoutez la nouvelle fonction `create_many_categories`. Cette fonction doit prendre deux paramètres : `req` (la requête) et `res` (la réponse). Voici un exemple de ce que pourrait être votre fonction :

```javascript
exports.create_many_categories = function(req, res) {
    let categories = req.body; // Supposons que le corps de la requête contient un tableau de catégories.
    
    // Utilisez la méthode appropriée de votre modèle de données pour insérer plusieurs documents.
    // Par exemple, si vous utilisez Mongoose avec un modèle Categorie, cela pourrait ressembler à :
    Categorie.insertMany(categories, function(err, categories) {
        if (err) {
            res.status(500).send(err); // Gestion des erreurs
        } else {
            res.status(201).json(categories); // Retourne les catégories insérées
        }
    });
};
```

**Note :** Assurez-vous que votre modèle de données (dans cet exemple, `Categorie`) est correctement défini et que la méthode `insertMany` est disponible pour l'insérer plusieurs documents à la fois. La gestion des erreurs est essentielle pour informer le client en cas de problème lors de l'insertion.

### Étape 3 : Testez Votre API

Après avoir ajouté la nouvelle route et implémenté la fonctionnalité d'insertion multiple, il est important de tester votre API pour s'assurer que tout fonctionne comme prévu.

- Utilisez un outil comme Postman ou Curl pour envoyer une requête POST à `/categories` avec un tableau de catégories dans le corps de la requête.
- Vérifiez également que la requête GET à `/categories` retourne toujours la liste complète des catégories, y compris celles que vous venez d'ajouter.

En suivant ces étapes, vous aurez étendu votre API pour inclure une fonctionnalité d'insertion multiple de catégories, répondant ainsi à l'objectif de cet exercice.

### Étape 4 :  Amélioration avec la gestion des codes d'erreurs

Pour gérer les codes d'erreur et de succès de manière plus approfondie dans la fonction `create_many_categories`, vous pouvez incorporer plusieurs codes de statut HTTP pour couvrir divers scénarios. Voici comment vous pourriez modifier la fonction pour inclure une gestion plus complète des codes de statut HTTP :

```javascript
exports.create_many_categories = function(req, res) {
    let categories = req.body; // On suppose que le corps de la requête contient un tableau de catégories.

    // Vérifier si le tableau des catégories est présent et non vide
    if (!categories || categories.length === 0) {
        // 400 Bad Request si le corps de la requête est vide ou mal formé
        return res.status(400).send({ message: "La requête doit contenir un tableau de catégories." });
    }

    // Utilisation de la méthode pour insérer plusieurs documents
    Categorie.insertMany(categories, function(err, categories) {
        if (err) {
            // 500 Internal Server Error si une erreur serveur survient
            return res.status(500).send(err);
        } else {
            // 201 Created pour indiquer que les catégories ont été créées avec succès
            return res.status(201).json(categories);
        }
    });
};
```

**Gestion avancée des codes d'état HTTP :**

- **100 Continue :** Rarement utilisé dans les API REST, ce code indique que le début de la requête a été reçu et que le client peut continuer avec sa requête.

- **200 OK :** Signifie que la requête a réussi. Vous pouvez l'utiliser pour les requêtes GET réussies.

- **201 Created :** Indique que la requête a réussi et qu'une ou plusieurs ressources ont été créées. C'est le code de statut idéal pour une opération POST qui aboutit à une création.

- **400 Bad Request :** Utilisé quand les données envoyées par le client sont incomplètes ou mal formées.

- **404 Not Found :** Ce code indique que la ressource demandée n'a pas été trouvée. Bien que moins courant lors de la création de ressources, il peut être utile si vous effectuez des opérations préalables, comme vérifier l'existence d'une autre ressource avant de procéder.

- **500 Internal Server Error :** Indique une erreur côté serveur. C'est un code général utilisé lorsqu'aucun autre code spécifique n'est approprié.

Cette approche assure que votre API communique de manière claire et conforme aux attentes des développeurs qui l'utilisent, en fournissant des réponses précises sur le résultat de leur requête.
