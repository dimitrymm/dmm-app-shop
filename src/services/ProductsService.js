import HttpClient from './utils/HttpClient';

class ProductsService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3001');
    }
    async listProducts() {
        return this.httpClient.get('/products');
    }
    async createListProducts(product) {
        return this.httpClient.post('/products', { body: product });
    }
}

export default new ProductsService();
