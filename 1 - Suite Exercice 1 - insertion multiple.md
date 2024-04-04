# Suite Exercice 1 - Insertion des catégories 

Voici une liste de catégories et produits génériquesà ajouter pour le CREATE de CRUD :

# 1- Catégories:

1. Électronique
   - Produits: Smartphone, Tablette, Ordinateur portable
2. Livres
   - Produits: Roman, Dictionnaire, Manuel scolaire
3. Vêtements
   - Produits: T-shirt, Jeans, Casquette
4. Mobilier
   - Produits: Chaise, Bureau, Étagère
5. Alimentation
   - Produits: Pain, Fromage, Jus de fruit

Chaque catégorie a des produits associés qui peuvent être ajoutés, lus, mis à jour ou supprimés dans l'application pour pratiquer les opérations CRUD.


# 2- Correction de la suite de l'Exercice 1 - Insertion des catégories : 

# Prérequis

1. Assurez-vous que le serveur de l'application est en cours d'exécution.
2. Installez l'extension REST Client pour Visual Studio Code depuis [ici](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) ou utilisez Postman.
3. Utilisation de REST Client
4. Ouvrez le fichier `.rest` correspondant à l'opération que vous souhaitez tester.
5. Cliquez sur le lien `Send Request` qui apparaît au-dessus de la requête dans le fichier.

# Utilisation de Postman

1. Ouvrez Postman et créez une nouvelle requête.
2. Sélectionnez la méthode appropriée (GET, POST, DELETE) et saisissez l'URL.
3. Pour les requêtes POST, ajoutez l'en-tête `Content-Type: application/json` et incluez le corps de la requête au format JSON dans la section `body`.
4. Envoyez la requête et observez la réponse.


## Opérations CRUD

# 3. Récupérer toutes les catégories (GET ALL)

- **Fichier**: `T1-GETALL.rest`
- **Requête**:
  ```http
  GET http://localhost:3000/categorie/
  ```

# 4. Créer une seule catégorie (POST ONLY ONE)

- **Fichier**: `T2-POST_ONLY_ONE.rest`
- **Requête**:
  ```http
  POST http://localhost:3000/categorie
  Content-Type: application/json

  {
      "code": "XYZ",
      "designation": "TELECOM987"
  }
  ```

# 5. Créer plusieurs catégories (POST MANY)

- **Fichier**: `T3-POST_MANY.rest`
- **Requête**:
  ```http
  POST http://localhost:3000/categories
  Content-Type: application/json

  [
      {
          "code": "ABCDEFG",
          "designation": "TELECOM123"
      },
      {
          "code": "ABC",
          "designation": "TELECOM"
      },
      {
          "code": "ABC",
          "designation": "TELECOM"
      }
  ]
  ```


# 6. Pour créer une nouvelle catégorie "Électronique" avec des produits :

```http
POST http://localhost:3000/categorie
Content-Type: application/json

{
    "code": "ELEC",
    "designation": "Électronique"
}
```

### 7. (OPTIONNEL ou à FAIRE PLUS TARD) - Ajouter des produits dans la catégorie "Électronique" :
### Il faut ajouter la méthode d'insertion multiple dans le contrôlleur du Produit avant d'exécuter la requête (de la même façon de l'insertion multiple dans le contrôlleur de Categorie)
```http
POST http://localhost:3000/produits
Content-Type: application/json

[
    {
        "code": "SMARTPHONE",
        "libelle": "Smartphone X1",
        "prix": 299.99,
        "categorie": "CAT_LIVRES_SMARTPHONE" // Remplacer par l'ID réel de la catégorie Électronique
    },
    {
        "code": "TABLETTE",
        "libelle": "Tablette T200",
        "prix": 199.99,
        "categorie": "CAT_LIVRES_TABLETTE" // Remplacer par l'ID réel de la catégorie Électronique
    },
    {
        "code": "LAPTOP",
        "libelle": "Ordinateur portable P450",
        "prix": 499.99,
        "categorie": "CAT_LIVRES_LAPTOP" // Remplacer par l'ID réel de la catégorie Électronique
    }
]
```

# 8. Pour créer une nouvelle catégorie "Livres" avec des produits :

```http
POST http://localhost:3000/categorie
Content-Type: application/json

{
    "code": "BOOK",
    "designation": "Livres"
}
```

# 9. (OPTIONNEL ou à FAIRE PLUS TARD) Pour ajouter des produits dans la catégorie "Livres" :

### Il faut ajouter la méthode d'insertion multiple dans le contrôlleur du Produit avant d'exécuter la requête (de la même façon de l'insertion multiple dans le contrôlleur de Categorie)

```http
POST http://localhost:3000/produits
Content-Type: application/json

[
    {
        "code": "ROMAN",
        "libelle": "Le Comte de Monte-Cristo",
        "prix": 14.99,
        "categorie": "CAT_LIVRES_ROMANS" // Remplacer par l'ID réel de la catégorie Livres
    },
    {
        "code": "DICO",
        "libelle": "Larousse Français-Anglais",
        "prix": 29.99,
        "categorie": "CAT_LIVRES_DICO" // Remplacer par l'ID réel de la catégorie Livres
    },
    {
        "code": "MANSC",
        "libelle": "Manuel de Mathématiques",
        "prix": 19.99,
        "categorie": "CAT_LIVRES_MANSC" // Remplacer par l'ID réel de la catégorie Livres
    }
]
```

# 10. Évaluation

Après avoir exécuté chaque opération CRUD, documentez les résultats et votre compréhension de la manière dont l'application traite chaque requête.
```

- Assurez-vous de remplacer `http://localhost:3000` par l'URL et le port réels si votre application s'exécute différemment.
- Je vous encourage à écrire vos  observations et à poser des questions si vous rencontrez des difficultés ou des comportements inattendus.
