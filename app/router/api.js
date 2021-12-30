const Router = require('express').Router;
const router = new Router();
const userController = require('../controllers/user-controller');

router.get('/test', function(req, res) {
    res.send('hello world');
});

router.post('/registration', userController.registration);
router.post('/login', userController.login);

module.exports = router;