import React from 'react';
import { render } from '@testing-library/react';

import PlayerCard from './PlayerCard.js';

describe('<PlayerCard />', () => {
    it('renders without crashing', () => {
        render(<PlayerCard />)
    })
})