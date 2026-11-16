import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.services.js';

export const getAllProducts = (req, res) => {
  const products = getAllProductsService();
  res.status(200).json(products);
};

export const getProductById = (req, res) => {
  const { id } = req.params;
  const product = getProductByIdService(id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.status(200).json(product);
};

export const createProduct = (req, res) => {
  const newProduct = createProductService(req.body);
  res.status(201).json({
    message: 'Producto creado exitosamente',
    product: newProduct
  });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  const deleted = deleteProductService(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Producto no encontrado para eliminar' });
  }
  res.status(200).json({ message: `Producto ${id} eliminado correctamente` });
};
