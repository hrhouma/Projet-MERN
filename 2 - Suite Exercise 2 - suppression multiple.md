# Documentation pour les fichiers .rest ou .http (si plusieurs dans le même fichier) avec REST Client

Ce guide décrit comment utiliser l'extension REST Client de Visual Studio Code pour interagir avec une API REST. Les fichiers `.rest` permettent de formuler des requêtes HTTP directement depuis votre éditeur de code.

## Prérequis

1. Avoir Visual Studio Code installé sur votre machine.
2. Installer l'extension REST Client depuis le [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=humao.rest-client).
3. S'assurer que le serveur backend de l'application est en cours d'exécution.

## T1-GETALL.rest - Récupérer toutes les catégories

1. Ouvrez le fichier `T1-GETALL.rest`.
2. Ajoutez la requête suivante pour récupérer toutes les catégories :

    ```http
    GET http://localhost:3000/categorie/
    ```

3. Cliquez sur `Send Request` qui apparaît au-dessus de la requête.
4. Visualisez la réponse dans la fenêtre de sortie de REST Client.

## T2-POST_ONLY_ONE.rest - Créer une catégorie

1. Ouvrez le fichier `T2-POST_ONLY_ONE.rest`.
2. Ajoutez la requête suivante pour créer une nouvelle catégorie :

    ```http
    POST http://localhost:3000/categorie
    Content-Type: application/json

    {
        "code":"XYZ",
        "designation": "Electronics"
    }
    ```

3. Cliquez sur `Send Request` pour exécuter la requête.
4. Vérifiez la réponse pour confirmer la création de la catégorie.

## T3-POST_MANY.rest - Créer plusieurs catégories

1. Ouvrez le fichier `T3-POST_MANY.rest`.
2. Utilisez la requête suivante pour créer plusieurs catégories en une seule requête :

    ```http
    POST http://localhost:3000/categories
    Content-Type: application/json

    [
        {
            "code": "BOOK",
            "designation": "Books"
        },
        {
            "code": "CLOTH",
            "designation": "Clothing"
        }
    ]
    ```

3. Cliquez sur `Send Request`.
4. La réponse indiquera le succès ou l'échec de l'opération de création en masse.

## T4-DELETE_ONLY_ONE_BYID.rest - Supprimer une catégorie spécifique

1. Ouvrez le fichier `T4-DELETE_ONLY_ONE_BYID.rest`.
2. Ajoutez la commande de suppression suivante, en remplaçant `ID` par l'identifiant réel de la catégorie que vous souhaitez supprimer :

    ```http
    DELETE http://localhost:3000/categorie/ID
    ```

3. Cliquez sur `Send Request`.
4. La réponse confirmera la suppression de la catégorie.

## T5-DELETE_ALL.rest - Supprimer toutes les catégories

1. Ouvrez le fichier `T5-DELETE_ALL.rest`.
2. Insérez la commande de suppression suivante pour supprimer toutes les catégories :

    ```http
    DELETE http://localhost:3000/categories
    ```

3. Cliquez sur `Send Request`.
4. Vérifiez que la réponse indique que toutes les catégories ont été supprimées.

---

Chaque étape vous guidera à travers le processus d'utilisation des fichiers `.rest` pour tester votre API. Assurez-vous que votre serveur est démarré et que l'URL de l'API correspond à l'environnement dans lequel vous travaillez.
