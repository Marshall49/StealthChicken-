const Physician = require("../models/physician.js");
const Case = require("../models/dCase.js");

app.get('/dashboard', function(req, res) {
  Case.find({}, function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      res.json(doc);
    }
  });
});

app.get('/dashboard/:id', function(req, res) {
  Physician.findOne({ "_id": req.params.id })
    .populate("dCase")
    .exec(function(error, doc) {
      if (error) {
        console.log(error);
      }
      else {
        res.json(doc);
      }
    });
});





app.post("/dashboard/:id", function(req, res) {
  const newCase = new Case(req.body);
  newCase.save(function(error, doc) {
    if (error) {
      console.log(error);
    }
    else {
      Physician.findOneAndUpdate({ "_id": req.params.id }, { "dCase": doc._id})
      .exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
    }
  });
});







// module.exports = function(app) {
//   const caseHandlers = require('../controllers/caseController.js');
//   const physician = require('../controllers/physicianController.js');
//
//     //Case Routes
//     app.route('/dashboard')
//         .get(caseHandlers.list_all_cases)
//         .post(physician.loginRequired, caseHandlers.create_a_case);
//
//     app.route('/dashboard/:caseId')
//         .get(caseHandlers.read_a_case)
//         .put(caseHandlers.update_a_case)
//         .delete(caseHandlers.delete_a_case);
//
//     app.route('/auth/register')
//         .post(physician.register);
//
//     app.route('/auth/sign_in')
//         .post(physician.sign_in);
//
// };



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
