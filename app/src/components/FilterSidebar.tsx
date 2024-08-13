import { Box } from '@mui/material';
import { DataTableFilterField } from '../lib/types';
import { Schema } from '../lib/schema';
import { FilterCollapsible } from './FilterCollapsible';

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
      <FilterCollapsible filterFields={filters} />
    </Box>
  );
};
