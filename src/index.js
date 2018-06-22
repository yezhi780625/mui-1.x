import React from 'react';
import { render } from 'react-dom';
import App from './App';

render(<App />, document.getElementById('app'));


if (module.hot) {
  module.hot.accept('./App.js', function() {
    console.log('Re-render App!');
    render(<App />, document.getElementById('app'));
  });
}
