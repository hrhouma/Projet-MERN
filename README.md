# Étape 1 : Reprogrammer les .env

![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/d70ee5d1-37a6-4e40-8b0a-dbb19adc2434)

# (SERVEUR) premier .env (serveur ==> BD)
```bash
MONGODB_URI= mongodb://127.0.0.1:27017/haythem (il va l'écrire dès que tu essayes node server.js , tu peux essayer avec /haythem (mongodb://127.0.0.1:27017/haythem) ou /todoapiDB (mongodb://127.0.0.1:27017/todoapiDB) ou whathever)
TOKEN_KEY= test
EMAIL= rehoumahaythem@gmail.com
PASSWORD= hahaha
```

# (CLIENT) deuxième .env (client ==> serveur)
```bash
REACT_APP_BACKEND_URL= http://localhost:5000/api
```

# Étape 2 - dans server.js

```bash
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/todoapiDB"; (deuxième partie n'est pas vraiment nécessaire)
```

# Étape 3 - démarrer le serveur et observer la création de la base de données

```bash
npm install
cd server
node server.js
```

# Étape 4 - démarrer le client et tester avec les paramètres indiqués dans le .env serveur

```bash
npm install
cd client
npm start
```

# Étape 5 - ajout et vérification dans la base de données avec mongo compas

```bash
ajout d'une activité et de son horaire
observer dans la base de données haythem par exemple dans haythem/activities ou todoapiDB/activities
```

# Étape 6 - démarrer le client et tester avec les paramètres indiqués dans le .env serveur

```bash
si vous changez de base de données ou que vous retestez avec dé,autres paramètres dans le .env il faut effacer la session (session storage)
Pour ce faire nettoyez l'historique de 1h du navigateur 
```


# Démo : Productivity-app + extension CI/CD

# Référence : 
- https://www.freecodecamp.org/news/automate-mern-app-deployment-with-jenkins/
![image](https://github.com/hrhouma/Projet-MERN/assets/10111526/b120f796-7481-4a78-909c-c96a9f763b82)



