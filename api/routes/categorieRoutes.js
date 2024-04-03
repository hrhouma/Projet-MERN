var cors = require('cors');

module.exports = function (app) {
    var categorie = require('../controllers/categorieController');
    app.use(cors());

    /**
     * @openapi
     * /categorie:
     *   get:
     *     description: Retourne une liste de toutes les catégories.
     *     responses:
     *       200:
     *         description: Une liste de catégories.
     */
    app.route('/categorie')
        .get(categorie.list_all_categorie)
        /**
         * @openapi
         * /categorie:
         *   post:
         *     description: Crée une nouvelle catégorie.
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               code:
         *                 type: string
         *                 description: Code de la catégorie.
         *               designation:
         *                 type: string
         *                 description: Désignation de la catégorie.
         *     responses:
         *       200:
         *         description: Catégorie créée avec succès.
         */
        .post(categorie.create_a_categorie);

    /**
     * @openapi
     * /categorie/{categorieId}:
     *   get:
     *     description: Retourne une catégorie spécifique par son ID.
     *     parameters:
     *       - in: path
     *         name: categorieId
     *         required: true
     *         description: ID de la catégorie à retrouver.
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Une catégorie spécifique.
     */
    app.route('/categorie/:categorieId')
        .get(categorie.read_a_categorie)
        /**
         * @openapi
         * /categorie/{categorieId}:
         *   put:
         *     description: Met à jour une catégorie spécifique par son ID.
         *     parameters:
         *       - in: path
         *         name: categorieId
         *         required: true
         *         description: ID de la catégorie à mettre à jour.
         *         schema:
         *           type: string
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               code:
         *                 type: string
         *                 description: Code de la catégorie.
         *               designation:
         *                 type: string
         *                 description: Désignation de la catégorie.
         *     responses:
         *       200:
         *         description: Catégorie mise à jour avec succès.
         */
        .put(categorie.update_a_categorie)
        /**
         * @openapi
         * /categorie/{categorieId}:
         *   delete:
         *     description: Supprime une catégorie spécifique par son ID.
         *     parameters:
         *       - in: path
         *         name: categorieId
         *         required: true
         *         description: ID de la catégorie à supprimer.
         *         schema:
         *           type: string
         *     responses:
         *       200:
         *         description: Catégorie supprimée avec succès.
         */
        .delete(categorie.delete_a_categorie);

    // Exercice 1 - Insertion multiple
    /**
     * @openapi
     * /categories:
     *   post:
     *     description: Crée plusieurs catégories.
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: array
     *             items:
     *               type: object
     *               properties:
     *                 code:
     *                   type: string
     *                   description: Code de la catégorie.
     *                 designation:
     *                   type: string
     *                   description: Désignation de la catégorie.
     *     responses:
     *       200:
     *         description: Catégories créées avec succès.
     */
    app.route('/categories')
        .get(categorie.list_all_categorie)
        .post(categorie.create_many_categories)
    
    // Exercice 2 - Suppression multiple
    /**
     * @openapi
     * /categories:
     *   delete:
     *     description: Supprime toutes les catégories.
     *     responses:
     *       200:
     *         description: Toutes les catégories ont été supprimées.
     */
        .delete(categorie.delete_all_categories);
};
