import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import { Schema } from '../lib/schema';
type MainDataTableProps = {
  rows: Schema[];
};
export const MainDataTable = ({ rows }: MainDataTableProps) => {
  // Example data
  // const rows = [
  //   { name: 'Item 1', value: 'Value 1' },
  //   { name: 'Item 2', value: 'Value 2' },
  //   { name: 'Item 3', value: 'Value 3' }
  // ];
  const columns = ['Name', 'Regions', 'Tags', 'Active', 'Public'];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                {((row.regions || []) as string[]).map(r => `${r}`).join(', ')}
              </TableCell>
              <TableCell>
                {((row.tags || []) as string[]).map(r => `${r}`).join(', ')}
              </TableCell>
              <TableCell>{row.active}</TableCell>
              <TableCell>{row.public}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
