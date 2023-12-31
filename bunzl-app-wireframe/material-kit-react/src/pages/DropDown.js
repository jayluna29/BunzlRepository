import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectSmall() {
  const [majorCategory, setMajorCategory] = React.useState('');

  const handleChange = (event) => {
    setMajorCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="demo-select-small-label">Major Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={majorCategory}
        label="Major Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Gloves</MenuItem>
        <MenuItem value={20}>Helmet</MenuItem>
        <MenuItem value={30}>Mask</MenuItem>
      </Select>
    </FormControl>
  );
}