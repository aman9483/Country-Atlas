import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput(''); 
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        marginBottom: '16px',
        marginTop: '50px',
        alignItems: 'center',
      }}
    >
      <form onSubmit={submitHandler}>
        <TextField
          style={{ width: '100%', maxWidth: '400px' }}
          placeholder="Search a Country...."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
    </div>
  );
};

export default SearchInput;
