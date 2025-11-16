const router = require('express').Router();
const productController = require('../controllers/productController');
const auth = require('../middleware/authMiddleware');
const upload = require('../config/multer');

router.get('/', productController.index);
router.get('/:id', productController.show);
router.post('/', auth, upload.single('image'), productController.store);
router.put('/:id', auth, upload.single('image'), productController.update);
router.delete('/:id', auth, productController.destroy);

module.exports = router;
