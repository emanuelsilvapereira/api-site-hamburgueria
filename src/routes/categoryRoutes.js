const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const auth = require('../middleware/authMiddleware');

router.get('/', categoryController.index);
router.post('/', auth, categoryController.store);
router.get('/:id', categoryController.show);
router.put('/:id', auth, categoryController.update);
router.delete('/:id', auth, categoryController.destroy);

module.exports = router;
