import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Loader from '../../loader/loader.js';
import { Countries_api } from '../../api/api.js';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchInput from '../../Cards/Card/Search/SearchInput.js';
import FilterCountry from '../../Cards/Card/Filter/filter.js';

export function CardDefault() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(`${Countries_api}/all`);
      if (data) {
        console.log('Data found:', data);
        setCountries(data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setLoading(false);
    }
  };

  const getCountryByName = async (countryName) => {
    try {
      const res = await fetch(`${Countries_api}/name/${countryName}`);
      if (!res.ok) throw new Error("Not found any country!");

      const data = await res.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getCountryByRegion = async (regionName) => {
    try {
      const res = await fetch(`${Countries_api}/region/${regionName}`);

      if (!res.ok) throw new Error("Failed..........");

      const data = await res.json();
      setCountries(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const cardStyle = {
    maxWidth: 300,
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    backgroundColor: 'blue-gray',
    height: 56,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const customImageClass = 'custom-image';

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="search">
            <SearchInput onSearch={getCountryByName} />
          </div>

          <div className="filter">
            <FilterCountry onSelect={getCountryByRegion} />
          </div>

          <Grid container spacing={3}>
            {countries.map((country, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Card style={cardStyle}>
                  <img
                    className={customImageClass}
                    src={country.flags.png}
                    alt="card"
                    style={imageStyle}
                  />
                  <CardHeader
                    style={headerStyle}
                    title={
                      <Typography variant="h5" color="blue-gray">
                        {country.name.common}
                      </Typography>
                    }
                  />
                  <CardContent>
                    <Typography>{/* Your content here */}</Typography>
                  </CardContent>

                  <Link to={`/country/${country.name.common}`}>
                    <CardActions>
                      <Button>Read More</Button>
                    </CardActions>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
}
