import { Product } from '@/product/type';
import axios from 'axios';
import Papa from 'papaparse';

const url: string = process.env.NEXT_PUBLIC_GSHEET_URL || '';

export default {
    list: async (): Promise<Product[]> => {
        const res = await axios.get(url, { responseType: 'blob' });
        return new Promise<Product[]>((resolve, reject) => {
            Papa.parse(res.data, {
                header: true,
                complete: (results) => resolve(results.data as Product[]),
                error: (error) => reject(error.message),
            });
        });
    },
};
