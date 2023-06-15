import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function GlobalSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <TextField
        id="search"
        type="search"
        label="Global Search"
        value={searchTerm}
        onChange={handleChange}
        sx={{ width: 200 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}