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
import NumberFormat from 'react-number-format';
import CircularProgress from '@material-ui/core/CircularProgress';

function WorldData() {
  const [worldData, setWorldData] = useState({});
  const [dataLoad, setDataload] = useState(false);

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/all')
      .then((res) => {
        setWorldData(res.data);
        setDataload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = dataLoad ? new Date(parseInt(worldData.updated)) : 'Loading...';
  const lastUpdated = date.toString();

  const classes = gridStyles();
  const cardClass = cardStyles();

  return (
    <div className={classes.root}>
      <h1 className="worldHeader">Wordlwide</h1>
      <div className="updateText">Last update: {lastUpdated}</div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card
            className={cardClass.root}
            style={{ borderBottomColor: '#009688' }}
          >
            <CardContent>
              <Typography className={cardClass.title} gutterBottom>
                Total Recoverd
              </Typography>
              {!dataLoad ? <CircularProgress /> : <span></span>}
              <Typography className={cardClass.pos}>
                <NumberFormat
                  value={worldData.recovered}
                  displayType={'text'}
                  thousandSeparator={true}
                  style={{ color: '#009688' }}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{ borderBottomColor: '#03A9F4' }}
            className={cardClass.root}
          >
            <CardContent>
              <Typography className={cardClass.title} gutterBottom>
                Total Cases
              </Typography>
              {!dataLoad ? <CircularProgress /> : <span></span>}
              <Typography className={cardClass.pos}>
                <NumberFormat
                  value={worldData.cases}
                  displayType={'text'}
                  thousandSeparator={true}
                  style={{ color: '#03A9F4' }}
                />
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            style={{ borderBottomColor: '#F44336' }}
            className={cardClass.root}
          >
            <CardContent>
              <Typography className={cardClass.title} gutterBottom>
                Total Death
              </Typography>
              {!dataLoad ? <CircularProgress /> : <span></span>}
              <Typography className={cardClass.pos}>
                <NumberFormat
                  value={worldData.deaths}
                  displayType={'text'}
                  thousandSeparator={true}
                  style={{ color: '#F44336' }}
                />
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
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.todayCases}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Today's Cases</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.todayDeaths}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Today's Death</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.todayRecovered}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Today's Recovered</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.active}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Active Cases</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.critical}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Active Critical</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.casesPerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Cases per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.deathsPerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Deaths per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.testsPerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Test per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.tests}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Total Test</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.population}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Population</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.activePerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Active per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.recoveredPerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Recovered per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.criticalPerOneMillion}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
                  </Typography>
                </CardContent>
                <p>Critical per One Million</p>
              </Card>
            </Grid>
            <Grid className="dataCircleDiv" item xs={12} md={2}>
              <Card className="">
                <CardContent>
                  <Typography component="h5" variant="h5">
                    {dataLoad ? (
                      <NumberFormat
                        value={worldData.affectedCountries}
                        displayType={'text'}
                        thousandSeparator={true}
                      />
                    ) : (
                      <CircularProgress />
                    )}
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
