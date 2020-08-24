import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, CardContent, Typography } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { countryStyles } from './AppStyles';
function CountryData() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/countries')
      .then((res) => {
        console.log(res.data);
        setCountryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const classes = countryStyles();
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>COUNTRY</h1>
      <Grid container style={{ marginBottom: '20px' }}>
        <Input style={{ width: '100%' }} placeholder="Search Country..." />
      </Grid>
      <Grid container spacing={2}>
        {countryData.map((data) => (
          <Grid item xs={12} md={2}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={data.countryInfo.flag}
                title={data.country}
              />

              <CardContent>
                <Typography component="h6" variant="h6">
                  {data.country}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot1"></div>Total Cases:{' '}
                  {numberWithCommas(parseInt(data.cases))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot2"></div>Recovered:{' '}
                  {numberWithCommas(parseInt(data.recovered))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Death:{' '}
                  {numberWithCommas(parseInt(data.deaths))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Active:{' '}
                  {numberWithCommas(parseInt(data.active))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Critical:{' '}
                  {numberWithCommas(parseInt(data.critical))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Test:{' '}
                  {numberWithCommas(parseInt(data.tests))}
                </Typography>
                <hr />
                <Typography component="p" variant="p">
                  <div className="dot dot1"></div>Today's Cases:{' '}
                  {numberWithCommas(parseInt(data.todayCases))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Death:{' '}
                  {numberWithCommas(parseInt(data.todayDeaths))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot2"></div>Recovered:{' '}
                  {numberWithCommas(parseInt(data.todayRecovered))}
                </Typography>
                <hr />
                <Typography component="p" variant="p">
                  <div className="dot"></div>Cases/M:{' '}
                  {numberWithCommas(parseInt(data.casesPerOneMillion))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Deaths/M:{' '}
                  {numberWithCommas(parseInt(data.deathsPerOneMillion))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Tests/M:{' '}
                  {numberWithCommas(parseInt(data.testsPerOneMillion))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Population:{' '}
                  {numberWithCommas(parseInt(data.population))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Case/People:{' '}
                  {numberWithCommas(parseInt(data.oneCasePerPeople))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Death/People:{' '}
                  {numberWithCommas(parseInt(data.oneDeathPerPeople))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Test/People:{' '}
                  {numberWithCommas(parseInt(data.oneTestPerPeople))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Active/M:{' '}
                  {numberWithCommas(parseInt(data.activePerOneMillion))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Recoveres/M:{' '}
                  {numberWithCommas(parseInt(data.recoveredPerOneMillion))}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Critical/M:{' '}
                  {numberWithCommas(parseInt(data.criticalPerOneMillion))}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CountryData;
