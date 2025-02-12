// src/service/ProductService.js
import products from '@/assets/products.json'; // Adjust the path as necessary

export const ProductService = {
    getProductsMini() {
        return new Promise((resolve) => {
            resolve(products); // Resolve the imported JSON data
        });
    }
};