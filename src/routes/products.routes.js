import express from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct
} from '../controllers/products.controller.js';
import { authentication } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Rutas públicas (cualquiera puede consultar el catálogo)
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);

// Rutas protegidas (exigen un Bearer Token válido)
router.post('/products/create', authentication, createProduct);
router.delete('/products/:id', authentication, deleteProduct);

export default router;
