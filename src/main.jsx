import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import GameProvider from './provider/GameProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <GameProvider>
    <RouterProvider router={router} />
  </GameProvider>
  </StrictMode>,
)
