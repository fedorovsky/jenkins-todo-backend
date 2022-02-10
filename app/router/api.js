const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/refresh', userController.refresh);


router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;