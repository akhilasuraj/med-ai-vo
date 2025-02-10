import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from './Shared/Services/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
