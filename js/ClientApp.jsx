// @flow

import React from 'react'; // We need import React everywhere we use jsx
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Perf from 'react-addons-perf'; // This can't go to prod. Use it to check rendering performance
import App from './App';

// This can't go to prod. It initialize Perf componente
// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  // Render per hot module replacement
  module.hot.accept('./App', () => {
    renderApp();
  });
}
