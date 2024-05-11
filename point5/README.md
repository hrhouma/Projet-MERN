# Partie 5.1 -Théorie différence entre jeton normal et jeton mis à jour
- Nous allons aborder le mécanisme de rafraîchissement de Token. Le démo est dans le fichier test.http dans l'appplication suivante (téléchargez p52.zip).

# Partie 5.2 - Tester l'application avec Rest Client (test.http) ==> p52.zip
- Nous n'avons pas d'interface front-end mais seulement test.http comme client.
### 1 - Vérifiez que vous avez mongodb.
### 2 - Ouvrir VScoe et ajoutez le fichier .env avec les informations suivantes: 

```ssh
DB = mongodb://127.0.0.1:27017
SALT = 10
ACCESS_TOKEN_PRIVATE_KEY = Add your private key
REFRESH_TOKEN_PRIVATE_KEY = Add your private key
```
### 3 - npm install
### 4 - npm start
### 5 - Testez les points de terminaisons avec notre client test.http

- Ajout d'un utilisateur dans la base de données (Inscription) - pas de token généré
- Connexion ou authentification --> on vérifie que l'utilisateur existe et si c'est le cas , on génére un token (laisse-passer) pour lui.
- Rafraîchir le token (mécanisme de sécurité)
- Déconnexion ou suppression du Token.

# Partie 5.3 - Testez l'application avec une interface graphique en React

- Cloner l'application p53.zip sur votre poste local
- Saisir code .
- Ouvrir deux terminaux dans VScode un pour le backend (cd backend) et un pour le frontend (cd frontend).
- Terminal 1: cd backend et npm install, aussi pour le Terminal 2 : cd frontend et npm install
- Démarrer les serveurs pour le backend (node server.js) et pour le frontend (npm start)
- Points de terminaison : on a besoin juste du frontend : http://127.0.0.1:3000 (pour le déboguage + dev le point de terminaison frontend est important http://127.0.0.1:8080 (regardez test.http pour toutes les routes bachend)
- Amusez vous à créer des utilisateurs
- Juste pour la démo, j'ai généré des tokens pour l'inscription mais on ne devrait pas ! Les tokens sont générés uniquement lors de l'authentifaction (comme un laisser-passer). Sinon un refresh token est ajouté pour des raisons de sécurité.
-  Dans la partie suivante. nous allons ajouter des rôles ! (code p54.zip) 

# Partie 5.4 - Application avec les rôles ( Ajout d'un drop-down menu avec 3 rôles + affichage du rôle choisi dans la page)

- Cloner l'application p54.zip sur votre poste local
- Saisir code .
- Ouvrir deux terminaux dans VScode un pour le backend (cd backend) et un pour le frontend (cd frontend).
- Terminal 1: cd backend et npm install, aussi pour le Terminal 2 : cd frontend et npm install
- Démarrer les serveurs pour le backend (node server.js) et pour le frontend (npm start)
- Points de terminaison : on a besoin juste du frontend : http://127.0.0.1:3000 (pour le déboguage + dev le point de terminaison backend est important http://127.0.0.1:8080 (regardez test.http pour toutes les routes bachend)
- Remarquez que nous avons la possibilité de choisir le rôle au moment de la création de l'utilisateur !
- Amusez vous à créer des utilisateurs **AVEC des RôLES**
-  Dans la partie suivante, nous allons ajouter des interfaces qui apparaîtront en fonction de votre  rôle ! (code p55.zip) , par exemple une interaface super-admin !


# Partie 5.5 (Draft) - (p55draft.zip)

# Partie 5.5 -

# Partie 5.6 - Exercice
- Créez 3 pages distinctes.
- Les 3 pages doivent être visible pour le super-admin.
- 2 pages uniquement seront visibles pour l'admin.
- 1 seule page sera visible pour l'utilisateur normal.


# Annexe #1: Problème entre (p55draft.zip) - 5.5 (p55final.zip)

## 1 - Contexte
Lors de l'implémentation des fonctionnalités d'authentification pour une application Web, nous avons rencontré un problème concernant la génération et la transmission des jetons (tokens) d'authentification JWT (JSON Web Tokens) lors des processus de connexion et d'inscription des utilisateurs.

## 2 - Problème Spécifique
Bien que l'inscription (sign-up) des utilisateurs fonctionnait correctement avec la génération et la transmission des tokens, le processus de connexion (log-in) ne retournait pas les tokens attendus. Cela empêchait les utilisateurs de recevoir un retour valide contenant les jetons nécessaires pour les sessions authentifiées suivantes.

## 3 - Analyse Technique
Le problème résidait principalement dans la gestion asynchrone des tokens au sein de la route `/logIn` dans le serveur backend utilisant Node.js et Express. L'approche initiale ne prenait pas correctement en compte la nature asynchrone de la fonction `generateTokens`, qui est essentielle pour la création des JWTs basés sur des informations utilisateur. L'omission de l'utilisation de `await` lors de l'appel à cette fonction conduisait à un comportement non bloquant, ce qui signifie que la réponse était envoyée avant que les tokens ne soient réellement générés.

## 4 - Solution Apportée
Pour résoudre ce problème, nous avons ajusté la route `/logIn` pour utiliser correctement `await` avec l'appel à `generateTokens`. Cette modification a assuré que les tokens étaient entièrement générés et disponibles avant d'envoyer la réponse au client. De plus, nous avons implémenté une gestion d'erreur améliorée autour de la génération des tokens pour capturer et traiter les exceptions potentielles, offrant une réponse plus robuste et informative en cas d'erreur.

## 5 - Impact
Cette correction a permis de garantir la fiabilité du processus de connexion, en assurant que chaque utilisateur reçoit correctement ses tokens d'accès et de rafraîchissement après une authentification réussie, facilitant ainsi une gestion sécurisée des sessions utilisateur dans l'application.


# Annexe #2 (suite 2) : Problème entre (p55draft.zip) - 5.5 (p55final.zip)
- Voici une explication détaillée des modifications apportées et pourquoi le code original pouvait poser problème :

## 1 - Modifications Clés

1. **Ajout de Logs de Débogage:**
   - **Pourquoi ?** Ajouter des logs dans la fonction `generateTokens` et juste après les appels à cette fonction dans les routes `/signUp` et `/logIn` vous aide à suivre le flux des données et à identifier où exactement les choses ne fonctionnent pas comme prévu.
   - **Impact :** Cela permet de vérifier si les tokens sont correctement générés et inclus dans la réponse de l'API, facilitant l'identification rapide des problèmes.

2. **Gestion des Erreurs dans `generateTokens`:**
   - **Pourquoi ?** La gestion des erreurs a été renforcée pour attraper et retourner les erreurs de manière plus explicite lors de la génération des tokens.
   - **Impact :** Si une erreur survient lors de la génération des tokens, elle est maintenant correctement enregistrée et traitée, empêchant les réponses silencieuses qui pourraient laisser les développeurs sans indice sur ce qui s'est mal passé.

3. **Validation des Tokens dans les Réponses de l'API:**
   - **Pourquoi ?** Avant de renvoyer la réponse, nous ajoutons une vérification pour s'assurer que les tokens `accessToken` et `refreshToken` existent après leur génération.
   - **Impact :** Cela empêche d'envoyer une réponse réussie sans tokens, ce qui peut confondre le frontend qui attend ces tokens pour les opérations de suivi.

## 2 - Problèmes Potentiels dans l'Ancien Code

- **Génération de Tokens Échoue Silencieusement:** Si les clés privées pour JWT ne sont pas configurées correctement ou si un autre problème survient dans `jwt.sign`, l'ancien code ne capturait pas ces erreurs explicitement. Cela pouvait conduire à une situation où aucune erreur n'est visible dans vos logs, mais les tokens ne sont pas générés.

- **Problèmes de Contexte Asynchrone:** L'utilisation des tokens immédiatement après un appel asynchrone sans s'assurer qu'ils ont été correctement définis peut entraîner des erreurs silencieuses. Dans l'ancien code, s'il y avait un retard ou une faute dans la génération des tokens, les contrôleurs n'en tenaient pas compte.

- **Manque de Feedback sur les Erreurs:** Sans logs appropriés ou gestion des erreurs dans la fonction `generateTokens`, il est difficile de diagnostiquer des problèmes spécifiques lors de la génération de tokens, comme des clés incorrectes ou des problèmes avec la base de données.

### Conclusion

Les modifications apportées visent à rendre le code plus robuste et transparent en ce qui concerne la gestion des erreurs et le suivi du flux de traitement des données. Cela permet non seulement de résoudre le problème actuel mais aussi de faciliter la maintenance et le débogage futurs du système.



# Annexe #3 (suite 3) : Problème entre (p55draft.zip) - 5.5 (p55final.zip)

- Voici une représentation simplifiée de la comparaison des modifications apportées au code du backend, similaire à ce que vous pourriez voir dans une interface de comparaison de code comme GitHub :

## 3.1 - Fonction `generateTokens`
**Avant :**
```javascript
const generateTokens = async (user) => {
    const payload = { _id: user._id, roles: user.roles };
    const accessToken = jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_PRIVATE_KEY,
        { expiresIn: "14m" }
    );
    const refreshToken = jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_PRIVATE_KEY,
        { expiresIn: "30d" }
    );
    return { accessToken, refreshToken };
};
```

**Après :**
```javascript
const generateTokens = async (user) => {
    try {
        const payload = { _id: user._id, roles: user.roles };
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m" }
        );
        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_PRIVATE_KEY,
            { expiresIn: "30d" }
        );
        return Promise.resolve({ accessToken, refreshToken });
    } catch (err) {
        return Promise.reject(err);
    }
};
```
**Changements :**
- Ajout d'un bloc `try-catch` pour capturer et retourner les erreurs qui peuvent survenir lors de la génération des tokens.

## 3.2 - Route `/logIn`
**Avant :**
```javascript
router.post("/logIn", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({ error: true, message: "Invalid email or password" });
    }
    const { accessToken, refreshToken } = generateTokens(user);
    res.json({ accessToken, refreshToken, user: user.roles });
});
```

**Après :**
```javascript
router.post("/logIn", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(401).json({ error: true, message: "Invalid email or password" });
    }
    const { accessToken, refreshToken } = await generateTokens(user);
    res.status(200).json({
        error: false,
        accessToken,
        refreshToken,
        user: {
            roles: user.roles // Assurez-vous que les rôles sont bien renvoyés ici
        },
        message: "Logged in successfully"
    });
});
```
**Changements :**
- Utilisation de `await` avec `generateTokens` pour s'assurer que les tokens sont générés avant de les envoyer en réponse.
- Ajout de gestion de statut et de structure de réponse pour clarifier le résultat et l'état de la requête.

- Ces modifications permettent de s'assurer que les tokens sont correctement générés et que les erreurs sont gérées de manière appropriée, rendant le code plus robuste et fiable.
