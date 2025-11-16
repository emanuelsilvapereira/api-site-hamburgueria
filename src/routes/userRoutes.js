const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/', userController.store); // create admin
router.get('/', auth, userController.index);
router.get('/:id', auth, userController.show);
router.put('/:id', auth, userController.update);
router.delete('/:id', auth, userController.destroy);

module.exports = router;
