### Quiz pour les étudiants

#### Question 1: Node.js - Express

Complétez le code pour créer un serveur Express qui écoute sur le port 5000 et possède une route `POST /api/register` pour enregistrer un utilisateur :

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

Quel est le rôle de `bodyParser.json()` dans ce code ?
- A. Convertir les données de la requête en format JSON
- B. Gérer les erreurs de la requête
- C. Générer un JWT
- D. Stocker les données dans le tableau `users`

#### Question 2: React - useState

Complétez le code pour gérer les données de formulaire dans un composant React :

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

Quel hook React est utilisé pour gérer l'état du formulaire ?
- A. `useEffect`
- B. `useState`
- C. `useReducer`
- D. `useContext`

#### Question 3: JWT

Complétez le code pour générer un JWT lors de l'enregistrement d'un utilisateur :

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

Que fait la fonction `jwt.sign()` ?
- A. Elle vérifie la validité du token
- B. Elle signe les données utilisateur avec une clé secrète pour générer un JWT
- C. Elle enregistre les données utilisateur dans la base de données
- D. Elle crypte les données utilisateur

#### Question 4: React Router

Complétez le code pour configurer les routes dans un composant React :

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

Quel composant de `react-router-dom` est utilisé pour définir les routes dans l'application ?
- A. `Link`
- B. `Route`
- C. `Switch`
- D. `NavLink`

#### Question 5: Utilisation de localStorage

Complétez le code pour stocker les données du formulaire dans le localStorage :

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

Quel est le but de `localStorage.setItem('formData', JSON.stringify(formData));` ?
- A. Envoyer les données du formulaire au backend
- B. Stocker les données du formulaire dans le localStorage du navigateur
- C. Afficher les données du formulaire à l'écran
- D. Valider les données du formulaire

---

Ce quiz couvre les concepts de Node.js, npm, Express, JWT, React, useState, React Router et localStorage, tout en étant basé sur l'énoncé du projet donné.
