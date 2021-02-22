import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './componets/AppRouther';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
