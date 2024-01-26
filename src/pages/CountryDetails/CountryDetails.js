import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Countries_api } from '../../Components/api/api';
import axios from 'axios';
import {
  Grid,
  Typography,
  makeStyles,
  CircularProgress,
  Box
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: theme.spacing(1),
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  flag: {
    width: '100%',
    height: 'auto',
    borderRadius: `${theme.spacing(1)}px ${theme.spacing(1)}px 0 0`,
  },
  detailsContainer: {
    padding: theme.spacing(4),
    width: '100%',
    boxSizing: 'border-box',
  },
  fadeIn: {
    animation: '$fadeIn 0.8s ease-in-out',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  '@keyframes fadeIn': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@media (min-width: 600px)': {
    card: {
      flexDirection: 'row',
    },
    flag: {
      width: '50%',
      height: '100%',
      borderRadius: `${theme.spacing(1)}px 0 0 ${theme.spacing(1)}px`,
    },
    detailsContainer: {
      padding: theme.spacing(4),
      width: '50%',
      boxSizing: 'border-box',
    },
  },
  detailsText: {
    fontSize: '1.4rem',
    fontFamily: 'Poppins, sans-serif',
    marginBottom: theme.spacing(2),
    lineHeight: '1.6',
    color: '#333',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: '#333',
  },
  strong: {
    fontWeight: 'bold',
  },
  borderCountriesBox: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    backgroundColor: '#f0f0f0',
  },
  borderCountryLink: {
    textDecoration: 'none',
    color: '#333',
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: 'background-color 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ccc',
    },
  },
}));

const CountryDetails = () => {
  const { countryName } = useParams();
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const fetchCurrencies = (currencies) => {
    if (Array.isArray(currencies)) {
      return currencies.map((currency) => `${currency.name} (${currency.symbol})`);
    } else {
      return [];
    }
  };

  const formatPopulation = (population) => {
    return population.toLocaleString();
  };

  const fetchSingleCountry = async () => {
    try {
      const { data } = await axios.get(`${Countries_api}/name/${countryName}`);
      setCountry(data);
      setLoading(false);
    } catch (error) {
      console.log(`The error message is: ${error.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCountry();
  });

  return (
    <div>
      {loading ? (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3} className={`${classes.container} ${classes.fadeIn}`}>
          {country.map((countryInfo) => (
            <Grid item xs={12} key={countryInfo.id}>
              <div className={`${classes.card} card`}>
                <img src={countryInfo.flags.png} alt={countryInfo.name} className={`${classes.flag} flag`} />
                <div className={`${classes.detailsContainer} ${classes.fadeIn}`}>
                  <Typography variant="h1" component="h2" className={classes.title}>
                    {countryInfo.name.common}
                  </Typography>
                  <Typography variant="body1" className={classes.detailsText}>
                    <strong className={classes.strong}>Official Name:</strong> {countryInfo.name.official}
                  </Typography>
                  <Typography variant="body1" className={classes.detailsText}>
                    <strong className={classes.strong}>Population:</strong> {formatPopulation(countryInfo.population)}
                  </Typography>
                  <Typography variant="body1" className={classes.detailsText}>
                    <strong className={classes.strong}>Region:</strong> {countryInfo.region}
                  </Typography>
                  <Typography variant="body1" className={classes.detailsText}>
                    <strong className={classes.strong}>Subregion:</strong> {countryInfo.subregion}
                  </Typography>
                  {countryInfo.currencies && (
                    <Typography variant="body1" className={classes.detailsText}>
                      <strong className={classes.strong}>Currencies:</strong> {fetchCurrencies(countryInfo.currencies).join(", ")}
                    </Typography>
                  )}
                  <Typography variant="h5" component="h2" className={classes.detailsText}>
                    <strong className={classes.strong}>FIFA Code:</strong> {countryInfo.fifa}
                  </Typography>
                  <Box className={classes.borderCountriesBox}>
                    {countryInfo.borders && countryInfo.borders.length > 0 ? (
                      <>
                        <strong className={classes.strong}>Border Countries:</strong>{' '}
                        {countryInfo.borders.map((border, index) => (
                          <Link to={`/${border}`} key={index} className={classes.borderCountryLink}>
                            {border}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <span className="no-countries">No neighboring countries share a border with it.</span>
                    )}
                  </Box>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default CountryDetails;
