const router = require('express').Router();
const orderController = require('../controllers/orderController');
const auth = require('../middleware/authMiddleware');

router.post('/', orderController.store); // site posts orders
router.get('/', auth, orderController.index); // admin lists
router.get('/:id', auth, orderController.show);
router.put('/:id', auth, orderController.update);

module.exports = router;
