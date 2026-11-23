import {
    getAllProducts,
    getProductByID,
    saveProduct,
    deleteProduct
} from '../models/products.model.js'


/* // array con productos de prueba / hardcodeados
const testProducts = [
    { id: '1', title: 'Mouse Gamer', price: 25000, category: 'perifericos' },
    { id: '2', title: 'Monitor 24"', price: 180000, category: 'monitores' }
] 
*/


export const getAllProductsService = async () => {
    return await getAllProducts();
};

export const getProductByIdService = async(id) => {
    return await getProductByID(id);
};

export const createProductService =  async (productData) => {
    return await saveProduct(productData);
};

export const deleteProductService = async (id) => {
    return await deleteProduct(id);
};