import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import GameProvider from './provider/GameProvider.jsx';
import AuthProvider from './provider/AuthProvider.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <GameProvider>
        <RouterProvider router={router} />
      </GameProvider>
    </AuthProvider>
  </StrictMode>,
)