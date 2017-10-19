const router = require('express').Router();
const physician = require('../controllers/physicianController.js');

// Matches with "/api/physician"
router.route("/")
  .get(physicianController.findAll)
  .post(physicianController.create);


// Matches with "/api/physician/:id"
router
  .route("/:id")
  .get(physicianController.findById)
  .put(physicianController.update)
  .delete(physicianController.remove);

module.exports = router;
