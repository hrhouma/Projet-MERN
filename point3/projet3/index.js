const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const app = express();

// Configuration de l'accès global aux variables d'environnement
dotenv.config();

const PORT = process.env.PORT || 5000;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const TOKEN_HEADER_KEY = process.env.TOKEN_HEADER_KEY;

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT} ...`);
});

// Générer un token JWT
app.post("/user/generateToken", (req, res) => {
    const data = {
        time: Date(),
        userId: 12,
    };

    const token = jwt.sign(data, JWT_SECRET_KEY);
    console.log("Generated Token:", token); // Débogage : affiche le token généré
    res.send(token);
});

// Vérifier le token JWT
app.get("/user/validateToken", (req, res) => {
    try {
        const token = req.header(TOKEN_HEADER_KEY);
        console.log("Received Token:", token); // Débogage : affiche le token reçu

        if (!token) {
            return res.status(401).send("No token provided");
        }

        const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET_KEY);
        console.log("Verified Data:", verified); // Débogage : affiche les données vérifiées

        if (verified) {
            return res.send("Successfully Verified");
        } else {
            return res.status(401).send("Access Denied");
        }
    } catch (error) {
        console.error("Token Verification Error:", error); // Débogage : affiche l'erreur de vérification du token
        return res.status(401).send("Invalid Token");
    }
});

// Exécuter le serveur
console.log(`Starting server on port ${PORT}`);