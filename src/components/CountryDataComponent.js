import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid, CardContent, Typography } from '@material-ui/core';
import { Input } from '@material-ui/core';
import {countryStyles} from './AppStyles';
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
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>COUNTRY</h1>
      <Grid container style={{marginBottom: '20px'}}>
        <Input style={{width: '100%'}} placeholder="Search Country..." />
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
                  <div className="dot dot1"></div>Total Cases: {data.cases}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot2"></div>Recovered:{' '}
                  {data.recovered}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Death: {data.deaths}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Active: {data.active}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Critical: {data.critical}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Test: {data.tests}
                </Typography>
                <hr/>
                <Typography component="p" variant="p">
                  <div className="dot dot1"></div>Today's Cases: {data.todayCases}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot3"></div>Death: {data.todayDeaths}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot dot2"></div>Recovered: {data.todayRecovered}
                </Typography>
                <hr />
                <Typography component="p" variant="p">
                  <div className="dot"></div>Cases/M: {data.casesPerOneMillion}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Deaths/M: {data.deathsPerOneMillion}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Tests/M: {data.testsPerOneMillion}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Population: {data.population}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Case/People: {data.oneCasePerPeople}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Death/People: {data.oneDeathPerPeople}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>1Test/People: {data.oneTestPerPeople}
                </Typography>      
                <Typography component="p" variant="p">
                  <div className="dot"></div>Active/M: {data.activePerOneMillion}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Recoveres/M: {data.recoveredPerOneMillion}
                </Typography>
                <Typography component="p" variant="p">
                  <div className="dot"></div>Critical/M: {data.criticalPerOneMillion}
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
