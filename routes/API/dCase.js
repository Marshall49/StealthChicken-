const router = require('express').Router();
const dCase = require('../../controllers/caseController.js')


//Case Routes
app.route('/dashboard')
    .get(caseHandlers.list_all_cases)
    .post(user.loginRequired, caseHandlers.create_a_case);

app.route('/dashboard/:caseId')
    .get(caseHandlers.read_a_case)
    .put(caseHandlers.update_a_case)
    .delete(caseHandlers.delete_a_case);

app.route('/auth/register')
    .post(user.register);

app.route('/auth/sign_in')
    .post(user.sign_in);

module.exports = router;