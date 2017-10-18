module.exports = function(app) {
  const caseHandlers = require('../controllers/caseController.js');
  const physician = require('../controllers/physicianController.js');

    //Case Routes
    app.route('/dashboard')
        .get(caseHandlers.list_all_cases)
        .post(physician.loginRequired, caseHandlers.create_a_case);

    app.route('/dashboard/:caseId')
        .get(caseHandlers.read_a_case)
        .put(caseHandlers.update_a_case)
        .delete(caseHandlers.delete_a_case);

    app.route('/auth/register')
        .post(physician.register);

    app.route('/auth/sign_in')
        .post(physician.sign_in);

};



//
// // Matches with "/api/physician"
// router.route("/")
//   .get(physicianController.findAll)
//   .post(physicianController.create);
//
// // Matches with "/api/physician/:id"
// router
//   .route("/:id")
//   .get(physicianController.findById)
//   .put(physicianController.update)
//   .delete(physicianController.remove);

// module.exports = router;
