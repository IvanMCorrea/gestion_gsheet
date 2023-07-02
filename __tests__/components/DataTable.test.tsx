import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import DataTable from '@/pages/DataTable';
import { Product } from '@/product/type';
import { prettyDOM } from '@testing-library/react';

describe('DataTable component', () => {
    const products: Array<Product> = [];
    it('Debe renderizar Data Table con Search Bar', () => {
        const component = render(<DataTable products={products} />);
        const placeholder = 'Filtrar por nombre de producto';
        const input = component.getByPlaceholderText(placeholder);
        console.log(prettyDOM(input));
    });
});
