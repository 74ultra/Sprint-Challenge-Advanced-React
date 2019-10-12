import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render } from '@testing-library/react';

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing using testing-library', () => {
    render(<App />);
  })
  

})


/*
it('displays header text', () => {
    const headerText = render(<App />)
    headerText.getByText(/Women's World Cup/i)
  })

*/