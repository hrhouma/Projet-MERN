# Explication
- v1 : Application de base de geeksforgooks
- v2 : Amélioration
- v3:  Intégration d'un formulaire avec l'application


# Étape 1 : 

https://www.geeksforgeeks.org/how-to-integrate-stripe-payment-gateway-in-node-js/

1) npm init
2) Création + Copier le code de index.js
3) Commenter le code et garder uniquement les dépendances  (code ci-dessous) dans index.html
4) npm install express body-parser path  stripe ejs 
5) exécuter node index.js
__________________________________

# Étape 2 : 

# index.html
Vous pouvez tester ce code soit avec index.html (la premiere app.get commentée ou index.ejs (la deuxieme app.get )


const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/*app.get('/', function(req, res){
    //res.send ('Bonjour')
    //res.sendFile(__dirname + '/views/index.html')
})*/

app.get('/', function(req, res){
    res.render('index.ejs')
})

app.listen(port, function(error){
    if(error) throw error
    console.log("Server created Successfully")
})


__________________________________


# Étape 3 : 

- https://dashboard.stripe.com/apikeys
- Changez avec les infos de votre clé publique et clés secrètes 
- Exécutez : npm install
- N'hésitez pas de tester ! L'argent reste dans votre compte stripe ;)
