import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { MainDataTable } from './components/MainDataTable';
import { FilterSidebar } from './components/FilterSidebar';
import { data, filterFields } from './lib/data';

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        m: '1rem auto',
        width: '100vw',
        padding: '2rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid red'
      }}
    >
      <CssBaseline />
      <FilterSidebar filters={filterFields} />
      <Box sx={{ flexGrow: 1, padding: '16px' }}>
        <MainDataTable rows={data} />
      </Box>
    </Box>
  );
};

export default App;
