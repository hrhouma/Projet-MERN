var mongoose = require('mongoose'),
Produit = mongoose.model('Produit');

exports.list_all_produit = function(req, res) {
  Produit.find({}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};




exports.create_a_produit = function(req, res) {
  var new_produit = new Produit(req.body);
  new_produit.save(function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.read_a_produit = function(req, res) {
  Produit.findById(req.params.produitId, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};

exports.read_a_produit_by_code = function(req, res) {
  Produit.find({"code": req.params.produitCode}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.update_a_produit = function(req, res) {
  Produit.findOneAndUpdate({_id: req.params.produitId}, req.body, {new: true}, function(err, produit) {
    if (err)
      res.send(err);
    res.json(produit);
  });
};


exports.delete_a_produit = function(req, res) {


  Produit.remove({
    _id: req.params.produitId
  }, function(err, produit) {
    if (err)
      res.send(err);
    res.json({ message: 'Produit successfully deleted' });
  });
};

