import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import React from 'react';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  );
}
