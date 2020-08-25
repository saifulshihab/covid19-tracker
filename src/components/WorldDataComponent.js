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

function WorldData() {
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

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

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
                {numberWithCommas(parseInt(worldData.recovered))}
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
                {numberWithCommas(parseInt(worldData.cases))}
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
                {numberWithCommas(parseInt(worldData.deaths))}
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
          <Grid container spacing={2}>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.todayCases))}
                  </Typography>
                </CardContent>
                <p>Today's Cases</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.todayDeaths))}
                  </Typography>
                </CardContent>
                <p>Today's Death</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.todayRecovered))}
                  </Typography>
                </CardContent>
                <p>Today's Recovered</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.active))}
                  </Typography>
                </CardContent>
                <p>Active Cases</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.critical))}
                  </Typography>
                </CardContent>
                <p>Active Critical</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.casesPerOneMillion))}
                  </Typography>
                </CardContent>
                <p>Cases per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.deathsPerOneMillion))}
                  </Typography>
                </CardContent>
                <p>Deaths per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.testsPerOneMillion))}
                  </Typography>
                </CardContent>
                <p>Test per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.tests))}
                  </Typography>
                </CardContent>
                <p>Total Test</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.population))}
                  </Typography>
                </CardContent>
                <p>Population</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.activePerOneMillion))}
                  </Typography>
                </CardContent>
                <p>Active per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(
                      parseInt(worldData.recoveredPerOneMillion)
                    )}
                  </Typography>
                </CardContent>
                <p>Recovered per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(
                      parseInt(worldData.criticalPerOneMillion)
                    )}
                  </Typography>
                </CardContent>
                <p>Critical per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h54" variant="h5">
                    {numberWithCommas(parseInt(worldData.affectedCountries))}
                  </Typography>
                </CardContent>
                <p>Affected Countries</p>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <CountryData />
    </div>
  );
}

export default WorldData;
