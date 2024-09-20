import HttpClient from './utils/HttpClient';

class CategoriesService {
    constructor() {
        this.httpClient = new HttpClient('http://localhost:3001');
    }
    async listCategories() {
        return this.httpClient.get('/categories');
    }
    async createCategory(category) {
        return this.httpClient.post('/categories', { body: category });
    }
}

export default new CategoriesService();
