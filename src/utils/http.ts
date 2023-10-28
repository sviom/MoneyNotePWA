import axios from 'axios';

export default class KAxios {
    private static baseUrl = 'localhost:5143';

    static async get<T, U>(url: string, data: T): Promise<U | null> {
        try {
            const result = await axios.get<U>(url, {
                baseURL: KAxios.baseUrl,
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
                baseURL: KAxios.baseUrl,
            });
            if (result.status === 200) return result.data;
        } catch (error) {
            console.error('error : ', error);
        }
        return null;
    }
}
