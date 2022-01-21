import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from './context';
import reducer, { initialState} from './reducer';

ReactDOM.render(
  <>
    <ProductProvider
      initialState={initialState} reducer={reducer}
    >
      <App />
    </ProductProvider>
    
  </>,
  document.getElementById('root')
);
