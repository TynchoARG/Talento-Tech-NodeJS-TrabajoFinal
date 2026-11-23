import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
  const products = await getAllProductsService();
  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);

  if (!product) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }
  res.status(200).json(product);
};

export const createProduct = async (req, res) => {
  const newProduct = await createProductService(req.body);
  res.status(201).json({
    message: 'Producto creado exitosamente',
    product: newProduct
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deleted = await deleteProductService(id);

  if (!deleted) {
    return res.status(404).json({ message: 'Producto no encontrado para eliminar' });
  }
  res.status(200).json({ message: `Producto ${id} eliminado correctamente` });
}