import React from 'react'; // We need import React everywhere we use jsx
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  // Render per hot module replacement
  module.hot.accept('./App', () => {
    renderApp();
  });
}
