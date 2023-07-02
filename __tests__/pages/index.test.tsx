import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home page', () => {
    it('Debe renderizar Home con título', () => {
        render(<Home />);
        const title = 'Gestión con Google Sheets';
        const header = screen.getByRole('heading');
        expect(header).toHaveTextContent(title);
    });
});
