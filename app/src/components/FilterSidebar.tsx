import { Box } from '@mui/material';
import { DataTableFilterField } from '../lib/types';
import { Schema } from '../lib/schema';

type FilterSidebarProps = {
  filters: DataTableFilterField<Schema>[];
};
export const FilterSidebar = ({ filters }: FilterSidebarProps) => {
  return (
    <Box
      sx={{
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        m: '1rem 1rem auto'
      }}
    >
      Filters
      {filters.map((filter, index) => (
        <p key={index}>{filter.label}</p>
      ))}
    </Box>
  );
};
