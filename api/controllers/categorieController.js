var mongoose = require('mongoose'),
Categorie = mongoose.model('Categorie');

exports.list_all_categorie = function(req, res) {
  Categorie.find({}, function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};

exports.create_a_categorie = function(req, res) {
  var new_categorie = new Categorie(req.body);
  new_categorie.save(function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};


exports.read_a_categorie = function(req, res) {
  Categorie.findById(req.params.categorieId, function(err, categorie) {
    if (err)
      res.send(err);
    res.json(categorie);
  });
};


exports.update_a_categorie = function(req, res) {
  Categorie.findOneAndUpdate({_id: req.params.categorieId}, req.body, {new: true}, function(err, categorie) {
    if (err) {
      res.status(404).send(err);
  } else {
      res.status(200).send({ message: 'La m-a-j a été effectuée avec succès' });
  }

  });
};


exports.delete_a_categorie = function(req, res) {


  Categorie.remove({
    _id: req.params.categorieId
  }, function(err, categorie) {
    if (err)
      res.send(err);
    res.json({ message: 'Categorie successfully deleted' });
  });
};


//exercice 1 - insertion multiple

exports.create_many_categories = function(req, res) {
  // req.body should be an array of category objects
  let categoryArray = req.body;

  // Check if the input is an array
  if (!Array.isArray(categoryArray)) {
    return res.status(400).send({ message: "Input should be an array of categories" });
  }

  // Insert multiple documents using insertMany
  Categorie.insertMany(categoryArray, function(err, categories) {
    if (err) {
      // Handle any errors
      res.status(500).send(err);
    } else {
      // Successful insertion
      res.status(201).json(categories);
    }
  });
};


//Exercice 2 - supprimer toutes les catégories avec une seule requête

exports.delete_all_categories = function(req, res) {
  Categorie.deleteMany({}, function(err) {
      if (err) {
          res.status(500).send(err);
      } else {
          res.status(200).send({ message: 'Toutes les catégories ont été supprimées' });
      }
  });
};


