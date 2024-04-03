# net start MONGODB
# net stop MONGODB

Voici un résumé des commandes `net` associées à la gestion des services et des ressources réseau :

- **`net start [NomDuService]`** : Démarre un service spécifié. Par exemple, `net start MongoDB` démarrerait le service MongoDB.
- **`net stop [NomDuService]`** : Arrête un service spécifié. Cette commande est utile pour arrêter des services en cours d'exécution avant de réaliser des tâches de maintenance ou des mises à jour.
- **`net pause [NomDuService]`** : Met en pause un service en cours d'exécution. Tous les services ne supportent pas la pause.
- **`net continue [NomDuService]`** : Reprend un service en pause.

Pour vérifier l'état d'un service, vous devriez utiliser :
- **`sc query [NomDuService]`** : Cette commande affiche l'état du service spécifié, par exemple, si le service est en cours d'exécution, arrêté, en pause, etc.
- **Gestionnaire des services** : Vous pouvez également ouvrir le gestionnaire des services en tapant `services.msc` dans l'exécution ou la recherche du menu Démarrer pour obtenir une interface graphique où vous pouvez voir l'état de tous les services et les gérer.
- **Gestionnaire des tâches** : En ouvrant le gestionnaire des tâches (Ctrl+Shift+Esc), vous pouvez voir les processus en cours d'exécution, ce qui peut inclure certains services, bien que cela ne soit pas le moyen le plus fiable de gérer les services.

La commande `net` est principalement conçue pour la gestion de réseau et des services simples de démarrage/arrêt, tandis que `sc` est plus versatile pour la gestion détaillée des services Windows.
