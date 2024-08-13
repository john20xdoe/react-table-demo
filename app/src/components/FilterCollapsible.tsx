import { useState } from 'react';
import {
  Collapse,
  Button,
  Typography,
  Checkbox,
  Box,
  FormControlLabel
} from '@mui/material';
import { DataTableFilterField } from '../lib/types';
import { Schema } from '../lib/schema';

// Type for the option
type OptionType = {
  value: string;
  label: string;
};

// Subcomponent for filter field options
const FilterFieldOption = ({
  option,
  checked,
  onChange
}: {
  option: OptionType;
  checked: boolean;
  onChange: (value: string) => void;
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={checked}
        onChange={() => onChange(option.value)}
        name={option.label}
      />
    }
    label={option.label}
  />
);

export const FilterCollapsible = ({
  filterFields
}: {
  filterFields: DataTableFilterField<Schema>[];
}) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  // TODO: map this per filter
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (value: string) => {
    setOpen(prevOpen => ({ ...prevOpen, [value]: !prevOpen[value] }));
  };

  const handleCheckboxChange = (value: string) => {
    setCheckedState(prevChecked => ({
      ...prevChecked,
      [value]: !prevChecked[value]
    }));
  };

  return (
    <div>
      {filterFields.map(field => (
        <div key={field.value}>
          <Typography onClick={() => handleToggle(field.value)}>
            {field.label}
          </Typography>
          <Collapse in={open[field.value]}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {field.options?.map((option, idx) => (
                <FilterFieldOption
                  key={idx}
                  option={option}
                  checked={!!checkedState[option.value]}
                  onChange={handleCheckboxChange}
                />
              ))}
            </Box>
          </Collapse>
        </div>
      ))}
    </div>
  );
};
