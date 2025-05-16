const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const upload = require('../middleware/upload'); 

router.get('/', productController.getAllProducts);
router.put('/:id', productController.updateProductStock);
router.post("/", upload.single("image"), productController.addProduct);
module.exports = router;
