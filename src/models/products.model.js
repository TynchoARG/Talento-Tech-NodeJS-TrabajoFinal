import { db } from '../data/data.js';
import { 
    collection, 
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc 
 } from 'firebase/firestore';

 const productsCollection = collection(db, 'products');

 // Método para obtener todos los productos 
 export async function getAllProducts() {
    const querySnapshot = await getDocs (productsCollection);
    const products = [];
    querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data () });
    });
    return products;
 }

 // Método para buscar un producto por su ID
 export async function getProductByID(id) {
    const productDoc = await getDoc(doc (productsCollection, id));
    if (productDoc.exists()) {
        return { id: productDoc.id, ...productDoc.data() }
    }
    return null;
 }

 // Método para guardar un nuevo producto
 export async function saveProduct(product) {
    const docRef = await addDoc(productsCollection, product);
    return { id: docRef.id, ...product };
 }

 // Método para eliminar un producto por su ID y previamente verificando que el mismo exista
export async function deleteProduct(id) {
    const productRef = doc(productsCollection, id);     // 1. Apunta a la BD
    const productDoc = await getDoc(productRef);        // 2. Busca en la BD
    if (!productDoc.exists()) return false;             // 3. Si no existe avisa (false)
    await deleteDoc(productRef);                        // 4. Si EXISTE, lo borra
    return true;                                        // 5. Avisa que se borró correctamente (true)
}