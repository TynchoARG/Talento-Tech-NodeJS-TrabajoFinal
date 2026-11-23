import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService
} from '../services/products.services.js';

export const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  };
};

export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  };
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await createProductService(req.body);
    res.status(201).json({
      message: 'Producto creado exitosamente',
      product: newProduct
    })
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
  };
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await deleteProductService(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Producto no encontrado para eliminar' });
    }
    res.status(200).json({ message: `Producto ${id} eliminado correctamente` })
  } catch (error) {
    res.status(500).json({ message: 'Error interno del servidor', error: error.message });
};
}