import express from 'express';
import {
  getProduct,
  getProductById,
  saveProduct,
  editProduct,
  deleteProduct,
} from '../controllers/product.js';

const productRouter = express.Router();
productRouter
  .get('/', getProduct)
  .get('/:id', getProductById)
  .post('/', saveProduct)
  .patch('/:id', editProduct)
  .delete('/:id', deleteProduct);

export default productRouter;
