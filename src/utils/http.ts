import axios from 'axios';

export default class HttpClient {
    private static baseUrl = 'http://localhost:3011/api';

    static async get<T, U>(url: string, data?: T): Promise<U | null> {
        try {
            const result = await axios.get<U>(url, {
                baseURL: HttpClient.baseUrl,
                params: data,
            });
            if (result.status === 200) return result.data;
        } catch (error) {
            console.error('error : ', error);
        }
        return null;
    }

    static async post<T, U>(url: string, data: T): Promise<U | null> {
        try {
            const result = await axios.post<U>(url, data, {
                baseURL: HttpClient.baseUrl,
            });
            if (result.status === 200) return result.data;
        } catch (error) {
            console.error('error : ', error);
        }
        return null;
    }
}
