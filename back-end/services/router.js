const passport = require('passport');
const AuthenticationController = require('../controllers/authentication_controller');
const UsersController = require('../controllers/users_controller');
const TodosController = require('../controllers/todos_controller');
const ConnectionController = require('../controllers/connection_controller');
const PlantController = require('../controllers/plant_controller');
const passportService = require('./passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});
const router = require('express').Router();

// Auth Routes
// -----------------------------------------------------------------------------
router.route('/signup')
  .post(AuthenticationController.signup);
router.route('/signin')
  .post([requireLogin, AuthenticationController.signin]);

// User Routes
// -----------------------------------------------------------------------------
router.route('/users/:user_id')
  .get(UsersController.show)
  .patch(UsersController.update);

// Connection Routes
// -----------------------------------------------------------------------------
router.route('/connection/:connectionId')
  .get(ConnectionController.show);

// Todo Routes
// -----------------------------------------------------------------------------
router.route('/connections/:connectionId/todos')
  .post(TodosController.create)
  .get(TodosController.index);

router.route('/connections/:connectionId/todos/:todoId')
  .delete(TodosController.destroy)
  .patch(TodosController.update);

// Plant Routes
// -----------------------------------------------------------------------------
router.route('/connection/:connectionId/plant')
  .patch(requireAuth, PlantController.update)
  .get(requireAuth, PlantController.show);
//-----------------------------------

module.exports = router;
