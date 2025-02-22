import axios from "./Axios.js";

export const getProductsRequest = () => axios.get('/product');
export const getProductByCategoryRequest = (ID_Product) => axios.get(`/product/${ID_Product}`);  
export const createProductsRequest = (product) => axios.post('/add_product', product);
export const statusProductsRequest = (ID_Product) => axios.put(`/product/toggle/${ID_Product}`);
export const updateProductsRequest = (ID_Product, product) => axios.put(`/update_product/${ID_Product}`, product)
export const deleteProductsRequest = (ID_Product) => axios.delete(`/product/${ID_Product}`);
export const getProducts = (id) => axios.get(`/product/${id}`);
export const getProductSale = (id) => axios.get(`/Singleproduct/${id}`);
export const getAllProduct = () => axios.get(`/AllProducts`);
// Detalles
export const getDetailProductRequest = (ID_Product) => axios.get(`/product_detail/${ID_Product}`)
export const createDetailPRequest = (ID_Product, datilsP) => axios.get(`/add_details/${ID_Product}`, datilsP)
export const deleteDetailProductRequest = (ID_ProductDetail) => axios.get(`/details/${ID_ProductDetail}`)