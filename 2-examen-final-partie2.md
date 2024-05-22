**Partie 2 de l'examen : Développement d'une Application React avec Formulaires Dynamiques**

**Objectif :** Vous devez créer une application React contenant deux routes spécifiques : `/inscription` et `/merci/{name}`.

**Instructions détaillées :**

1. **Route `/inscription` :**
   - Lorsque vous accédez à cette route, vous devez afficher un formulaire.
   - Le formulaire sera construit à partir d'un fichier JSON que vous recevrez en pièce jointe. Normalement, vous obtiendriez ce JSON via un endpoint API, mais pour cet exercice, vous pouvez simuler une fonction qui retourne directement ce JSON.
   - Le formulaire doit inclure un bouton "Enregistrer".
   - Lorsque ce bouton est cliqué :
     - Les données du formulaire doivent être envoyées via une requête POST au format JSON.
     - Les données doivent également être stockées dans le local storage en simulant une fonction de stockage.

2. **Route `/merci/{name}` :**
   - Après avoir soumis le formulaire, l'utilisateur est redirigé vers cette page.
   - La page doit remplacer `{name}` dans l'URL par la valeur du champ `first_name` obtenu à partir du formulaire.
   - Affichez un message de remerciement personnalisé sur cette page, par exemple : "Merci {name} pour votre inscription". Le `{name}` doit être extrait de l'URL.
   - Ajoutez un champ de saisie (INPUT) qui permet à l'utilisateur de modifier dynamiquement la valeur de `{name}` dans le message de remerciement sans avoir besoin de modifier l'URL.

**Consignes pour l'interface utilisateur :**
   - L'interface doit être esthétique et moderne. Vous devez utiliser l'une des bibliothèques suivantes pour styliser votre application : Bootstrap, Semantic UI, Bulma ou Material UI.

**Rendu :**
   - Assurez-vous que toutes les fonctionnalités sont correctement implémentées et testées avant la soumission.

