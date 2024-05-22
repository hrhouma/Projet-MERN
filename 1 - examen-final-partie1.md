### Quiz pour les étudiants

#### Question 1: Node.js - Express

## 1.1. Expliquez ce code :

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const users = [];

const JWT_SECRET = 'your_jwt_secret';

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { first_name, last_name, email, phone_number, street_address, post_code, country } = req.body;
  const user = { first_name, last_name, email, phone_number, street_address, post_code, country };
  users.push(user);
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ message: 'User registered successfully', token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 1.2. Quel est le rôle de `bodyParser.json()` dans ce code ?

- A. Convertir les données de la requête en format JSON
- B. Gérer les erreurs de la requête
- C. Générer un JWT
- D. Stocker les données dans le tableau `users`

## 1.3.  Express Middleware

Dans le code Express fourni, un middleware est utilisé pour analyser le corps de la requête. Qu'est-ce qu'un middleware dans le contexte d'Express.js et comment fonctionne-t-il ?

A. Un middleware est une fonction qui prend en charge les erreurs dans Express.js
B. Un middleware est une fonction qui est invoquée par le routeur Express.js avant d'atteindre la route finale
C. Un middleware est une bibliothèque pour gérer les bases de données dans Express.js
D. Un middleware est une fonction qui génère des vues dans Express.js

#### Question 2: React - useState

## 2.1. Expliquez ce code :

```jsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Inscription = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    street_address: '',
    post_code: '',
    country: 'CA',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      history.push(`/merci/${formData.first_name}`);
    }
  };

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Prénom</label>
          <input
            type="text"
            className="form-control"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
          />
        </div>
        <!-- Autres champs de formulaire -->
        <button type="submit" className="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  );
};

export default Inscription;
```
## 2.2. Quel hook React est utilisé pour gérer l'état du formulaire ?
- A. `useEffect`
- B. `useState`
- C. `useReducer`
- D. `useContext`

#### Question 3: JWT

## 3.1. Expliquez ce code : 

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const users = [];

const JWT_SECRET = 'your_jwt_secret';

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { first_name, last_name, email, phone_number, street_address, post_code, country } = req.body;
  const user = { first_name, last_name, email, phone_number, street_address, post_code, country };
  users.push(user);
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(201).json({ message: 'User registered successfully', token });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## 3.2. Que fait la fonction `jwt.sign()` ?
- A. Elle vérifie la validité du token
- B. Elle signe les données utilisateur avec une clé secrète pour générer un JWT
- C. Elle enregistre les données utilisateur dans la base de données
- D. Elle crypte les données utilisateur
- E. Elle décode un JWT pour vérifier son contenu
- F. Elle génère une clé secrète pour le token
- G. Elle configure les en-têtes de la requête
- H. Elle définit la durée de validité du JWT

#### Question 4: React Router


## 4.1. Expliquez ce code : 

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Inscription from './Inscription';
import Merci from './Merci';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Switch>
          <Route path="/inscription" component={Inscription} />
          <Route path="/merci/:name" component={Merci} />
          <Route exact path="/" component={Inscription} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

## 4.2. Quel composant de `react-router-dom` est utilisé pour définir les routes dans l'application ?
- A. `Link`
- B. `Route`
- C. `Switch`
- D. `NavLink`

#### Question 5: Utilisation de localStorage

## 5.1. Expliquez ce code : 

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  localStorage.setItem('formData', JSON.stringify(formData));

  const response = await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (response.ok) {
    history.push(`/merci/${formData.first_name}`);
  }
};
```

## 5.2. Quel est le but de `localStorage.setItem('formData', JSON.stringify(formData));` ?
- A. Envoyer les données du formulaire au backend
- B. Stocker les données du formulaire dans le localStorage du navigateur
- C. Afficher les données du formulaire à l'écran
- D. Valider les données du formulaire





#### Question 6: React - useEffect

Dans le composant React fourni, le hook `useState` est utilisé pour gérer l'état du formulaire. Supposons que vous voulez exécuter une certaine logique chaque fois que l'état du formulaire change. Quel hook React utiliseriez-vous pour cela ?

- A. `useEffect`
- B. `useState`
- C. `useReducer`
- D. `useContext`

#### Question 7: JWT - Refresh Tokens

Dans le code fourni, un JWT est généré lors de l'enregistrement d'un utilisateur. Supposons que vous voulez implémenter une fonctionnalité de rafraîchissement du token pour améliorer la sécurité. Comment fonctionnent les tokens de rafraîchissement et comment les implémenteriez-vous ?

- A. Les tokens de rafraîchissement sont utilisés pour stocker les données de l'utilisateur dans le navigateur
- B. Les tokens de rafraîchissement sont utilisés pour rafraîchir la page du navigateur
- C. Les tokens de rafraîchissement sont des tokens à longue durée de vie qui peuvent être utilisés pour obtenir de nouveaux tokens d'accès
- D. Les tokens de rafraîchissement sont des tokens qui sont générés à chaque requête pour améliorer la performance

#### Question 8: React Router - Protected Routes

Dans le code React fourni, plusieurs routes sont définies à l'aide de `react-router-dom`. Supposons que vous voulez ajouter une route protégée qui n'est accessible qu'aux utilisateurs authentifiés. Comment implémenteriez-vous cela ?

- A. En utilisant le hook `useAuth`
- B. En utilisant le hook `useProtectedRoute`
- C. En créant un composant de route protégée qui vérifie si l'utilisateur est authentifié avant de rendre le composant
- D. En utilisant le hook `useRoute`

#### Question 9: localStorage - sécurité (Security)

Dans le code fourni, les données du formulaire sont stockées dans le localStorage du navigateur. Quels sont les problèmes de sécurité potentiels avec l'utilisation du localStorage pour stocker des données sensibles et comment les atténueriez-vous ?

- A. Le localStorage n'a pas de problèmes de sécurité
- B. Les données dans le localStorage peuvent être volées par des scripts malveillants, donc il faut toujours crypter les données sensibles
- C. Le localStorage est vulnérable aux attaques CSRF, donc il faut toujours utiliser des tokens CSRF
- D. Le localStorage est vulnérable aux attaques XSS, donc il faut toujours désactiver JavaScript

#### Question 10: JWT - Refresh Tokens dans la vie rééelle (in Real Life)

Dans le monde réel, les tokens de rafraîchissement sont souvent utilisés en conjonction avec les tokens d'accès pour maintenir la sécurité tout en offrant une bonne expérience utilisateur. Pouvez-vous expliquer comment cela fonctionne et pourquoi c'est important ?

- A. Les tokens de rafraîchissement sont utilisés pour prolonger la session de l'utilisateur sans lui demander de se reconnecter, ce qui améliore l'expérience utilisateur tout en maintenant la sécurité.
- B. Les tokens de rafraîchissement sont utilisés pour stocker les données de l'utilisateur dans le navigateur, ce qui permet de maintenir l'état de la session.
- C. Les tokens de rafraîchissement sont utilisés pour crypter les données de l'utilisateur, ce qui améliore la sécurité.
- D. Les tokens de rafraîchissement sont utilisés pour suivre les activités de l'utilisateur sur le site, ce qui permet d'améliorer l'expérience utilisateur. 

