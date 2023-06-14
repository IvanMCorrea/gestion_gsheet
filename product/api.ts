import { Product } from '@/product/type';
import axios from 'axios';
import Papa from 'papaparse';

export default {
    list: async (): Promise<Product[]> => {
        const res = await axios.get(
            'https://docs.google.com/spreadsheets/d/e/2PACX-1vRqDyKVQraWu6DxXCIgMz0T-oKiDhSC0ngAwkarrxXMp1h7fb_ID-yjqDYlXhThzg/pub?gid=1364601426&single=true&output=csv',
            { responseType: 'blob' }
        );
        return new Promise<Product[]>((resolve, reject) => {
            Papa.parse(res.data, {
                header: true,
                complete: (results) => resolve(results.data as Product[]),
                error: (error) => reject(error.message),
            });
        });
    },
};
