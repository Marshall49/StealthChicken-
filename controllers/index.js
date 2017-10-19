import user_controller from './userController';
import case_controller from './caseController';
import comment_controller from './commentController';
import dexcom_controller from './dexcomController';
import auth_controller from './authenticationController';


export default {
    ...user_controller,
    ...case_controller,
    ...comment_controller,
    ...dexcom_controller,
    ...auth_controller
};