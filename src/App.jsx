import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e1e2f',
            color: '#fff',
            border: '1px solid #8b5cf6',
            borderRadius: '12px',
          },
        }}
      />
    </>
  );
}

export default App;