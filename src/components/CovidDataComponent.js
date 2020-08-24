import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { gridStyles, cardStyles } from './AppStyles';
import CountryData from './CountryDataComponent';

function CovidComponent() {
  const [worldData, setWorldData] = useState({});

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/all')
      .then((res) => {
        setWorldData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } */

  const date = new Date(parseInt(worldData.updated));
  const lastUpdated = date.toString();

  const classes = gridStyles();
  const cardClass = cardStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ textAlign: 'center' }}>WORLDWIDE</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            className={cardClass.root}
            style={{ borderBottomColor: '#2BAE66FF' }}
          >
            <CardContent>
              <Typography
                className={cardClass.title}
                color="textLight"
                gutterBottom
              >
                Total Recoverd
              </Typography>

              <Typography className={cardClass.pos} color="">
                {worldData.recovered}
              </Typography>
              <Typography variant="body2" component="p">
                Last update: {lastUpdated}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{ borderBottomColor: '#2196f3' }}
            className={cardClass.root}
          >
            <CardContent>
              <Typography
                className={cardClass.title}
                color="textLight"
                gutterBottom
              >
                Total Cases
              </Typography>

              <Typography className={cardClass.pos} color="">
                {worldData.cases}
              </Typography>
              <Typography variant="body2" component="p">
                Last update: {lastUpdated}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{ borderBottomColor: '#f44336' }}
            className={cardClass.root}
          >
            <CardContent>
              <Typography
                className={cardClass.title}
                color="textLight"
                gutterBottom
              >
                Total Death
              </Typography>

              <Typography className={cardClass.pos} color="">
                {worldData.deaths}
              </Typography>
              <Typography variant="body2" component="p">
                Last update: {lastUpdated}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div className="worldOthers">
        <CssBaseline />
        <Container fixed>
          <Grid container spacing={3}>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.todayCases}</div>
              <p>Today's Cases</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.todayDeaths}</div>
              <p>Today's Death</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.todayRecovered}</div>
              <p>Today's Recovered</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.active}</div>
              <p>Active Cases</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.critical}</div>
              <p>Active Critical</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.casesPerOneMillion}</div>
              <p>Cases per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.deathsPerOneMillion}</div>
              <p>Deaths per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.tests}</div>
              <p>Total Test</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.testsPerOneMillion}</div>
              <p>Test per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.population}</div>
              <p>Population</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.activePerOneMillion}</div>
              <p>Active per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.recoveredPerOneMillion}</div>
              <p>Recovered per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.criticalPerOneMillion}</div>
              <p>Critical per One Million</p>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <div className="dataCircle">{worldData.affectedCountries}</div>
              <p>Affected Countries</p>
            </Grid>
          </Grid>          
        </Container>
      </div>
      <CountryData />
    </div>
  );
}

export default CovidComponent;
