// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 2 }}>
        <Dashboard />
      </Box>
    </Box>
  );
}

export default App;
