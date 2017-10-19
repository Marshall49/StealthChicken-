const router = require('express').Router();
const User = require('../../controllers/userController.js');

// Matches with "/api/User"
router.route("/")
  .get(User.findAll)
  .post(User.create);


// Matches with "/api/User/:id"
router
  .route("/:id")
  .get(User.findById)
  .put(User.update)
  .delete(User.remove);

module.exports = router;
