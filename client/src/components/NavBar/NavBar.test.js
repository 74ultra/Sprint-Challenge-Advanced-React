import React from 'react';
import { render } from '@testing-library/react';

import NavBar from './NavBar.js';

describe('<NavBar />', () => {
    it('renders without crashing', () => {
        render(<NavBar />)
    })
    
    it('Displays button text', () => {
        const btnText = render(<NavBar />);
        btnText.getByText(/Shift Background/i)
    })
})