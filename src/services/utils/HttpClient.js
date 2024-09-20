import APIError from '../../errors/APIError';

class HttpClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(path, options) {
        return this.makeRequest(path, {
            method: 'GET',
            headers: options?.headers,
        });
    }

    post(path, options) {
        return this.makeRequest(path, {
            method: 'POST',
            body: options?.body,
            headers: options?.headers,
        });
    }

    put(path, body) {
        return this.makeRequest(path, {
            method: 'PUT',
            body,
        });
    }

    async makeRequest(path, options) {
        const headers = new Headers();
        if (options.body) {
            headers.append('Content-Type', 'application/json');
        }
        if (options.headers) {
            Object.entries(options.headers).forEach(([name, value]) => {
                headers.append(name, value);
            });
        }

        const response = await fetch(`${this.baseURL}${path}`, {
            method: options.method,
            body: JSON.stringify(options.body),
            headers,
        });

        let responseBody = null;

        const contentType = response.headers.get('Content-Type');
        // Verifica se existe conteúdo e se é JSON antes de tentar fazer o parsing
        if (contentType && contentType.includes('application/json')) {
            const textResponse = await response.text(); // Captura como texto primeiro
            responseBody = textResponse ? JSON.parse(textResponse) : null; // Tenta parsear só se houver texto
        }

        if (response.ok) {
            return responseBody;
        }

        throw new APIError(response, responseBody);
    }
}

export default HttpClient;
