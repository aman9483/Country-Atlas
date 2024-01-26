import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const Filter = ({ onSelect }) => {
  const [selectedRegion, setSelectedRegion] = useState('Filter By Regions');

  const handleRegionChange = (e) => {
    const regionName = e.target.value;
    setSelectedRegion(regionName);
    onSelect(regionName);
  };

  const handleResetFilter = () => {
    setSelectedRegion('Filter By Regions');
    onSelect('all'); // Assuming 'all' is the default value for no filter
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
      <Select
        onChange={handleRegionChange}
        label="Filter by Region"
        variant="outlined"
        value={selectedRegion}
        style={{ width: '100%', maxWidth: '400px', marginTop: '8px', color: 'black' }}
        startAdornment={
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="filter"
            onClick={handleResetFilter}
          >
            <RotateLeftIcon />
          </IconButton>
        }
      >
        <MenuItem value="Filter By Regions" disabled>
          Filter By Regions
        </MenuItem>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="africa">Africa</MenuItem>
        <MenuItem value="americas">Americas</MenuItem>
        <MenuItem value="asia">Asia</MenuItem>
        <MenuItem value="europe">Europe</MenuItem>
        <MenuItem value="oceania">Oceania</MenuItem>
      </Select>
    </div>
  );
};

export default Filter;
