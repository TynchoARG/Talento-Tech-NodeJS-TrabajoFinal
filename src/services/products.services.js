// array con productos de prueba / hardcodeados
const testProducts = [
    { id: '1', title: 'Mouse Gamer', price: 25000, category: 'perifericos' },
    { id: '2', title: 'Monitor 24"', price: 180000, category: 'monitores' }
]

export const getAllProductsService = () => {
    return testProducts;
};

export const getProductByIdService = (id) => {
    return testProducts.find((product) => product.id === id); 
};

export const createProductService = (productData) => {
    const newProduct = {
        id: String(testProducts.length + 1),
        ...productData
    };
    testProducts.push(newProduct);
    return newProduct;
};

export const deleteProductService = (id) => {
    const index = testProducts.findIndex((product) => product.id === id);
    if (index === -1) return false;
    testProducts.splice(index, 1);
    return true;
};