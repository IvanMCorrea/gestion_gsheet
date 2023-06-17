import { Product } from '@/product/type';
import axios from 'axios';
import Papa from 'papaparse';

const url: string | undefined = process.env.NEXT_PUBLIC_GSHEET_URL;

export default {
    list: async (): Promise<Product[]> => {
        try {
            if (url) {
                const res = await axios.get(url, { responseType: 'blob' });
                return new Promise<Product[]>((resolve, reject) => {
                    Papa.parse(res.data, {
                        header: true,
                        complete: (results) => resolve(results.data as Product[]),
                        error: (error) => reject(error.message),
                    });
                });
            }
            return [];
        } catch (error) {
            return [];
        }
    },
};
