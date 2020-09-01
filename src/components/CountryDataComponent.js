import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  Grid,
  CardContent,
  Typography,
  Input,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import { countryStyles } from './AppStyles';

function CountryData() {
  const [countryData, setCountryData] = useState([]);
  const [countrysearch, setCountrysearch] = useState('');
  const [dataLoad, setDataload] = useState(false);
  const [selectItem, setSelectitem] = useState('');

  useEffect(() => {
    axios
      .get('https://corona.lmao.ninja/v2/countries')
      .then((res) => {
        setCountryData(res.data);
        setDataload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const classes = countryStyles();

  const setCountrysearchHandler = (e) => {
    setSelectitem('');
    setCountrysearch(e.target.value);
  };

  const searchCountry = countryData.filter((item) => {
    return countrysearch !== ''
      ? item.country.toLowerCase().includes(countrysearch.toLowerCase())
      : item;
  });

  const selecfilterData = countryData.sort((a, b) => {
    if (selectItem !== '') {
      if (selectItem === 'Most Affected Country') {
        return b.cases - a.cases;
      } else if (selectItem === 'Less Affected Country') {
        return a.cases - b.cases;
      } else {
        return null;
      }
    } else {
      return searchCountry;
    }
  });

  const selectSrcData = selecfilterData.map((data, index) => (
    <Grid key={index} item xs={12} sm={4} md={2}>
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
          <Typography component="p" variant="body2">
            Total Cases:{' '}
            <NumberFormat
              value={data.cases}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recovered:{' '}
            <NumberFormat
              value={data.recovered}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Death:{' '}
            <NumberFormat
              value={data.deaths}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Active:{' '}
            <NumberFormat
              value={data.active}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Critical:{' '}
            <NumberFormat
              value={data.critical}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Test:{' '}
            <NumberFormat
              value={data.tests}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <hr />
          <Typography
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: '#03a9f4',
            }}
            component="p"
            variant="body2"
          >
            Last 24 Hours
          </Typography>

          <Typography component="p" variant="body2">
            Cases:{' '}
            <NumberFormat
              value={data.todayCases}
              displayType={'text'}
              thousandSeparator={true}
              style={{ color: '#ff5722' }}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Death:{' '}
            <NumberFormat
              value={data.todayDeaths}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recovered:{' '}
            <NumberFormat
              value={data.todayRecovered}
              displayType={'text'}
              thousandSeparator={true}
              style={{ color: '#009688' }}
            />
          </Typography>
          <hr />
          <Typography component="p" variant="body2">
            Cases/M:{' '}
            <NumberFormat
              value={data.casesPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Deaths/M:{' '}
            <NumberFormat
              value={data.deathsPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Tests/M:{' '}
            <NumberFormat
              value={data.testsPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Population:{' '}
            <NumberFormat
              value={data.population}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Case/People:{' '}
            <NumberFormat
              value={data.oneCasePerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Death/People:{' '}
            <NumberFormat
              value={data.oneDeathPerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Test/People:{' '}
            <NumberFormat
              value={data.oneTestPerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Active/M:{' '}
            <NumberFormat
              value={data.activePerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recoveres/M:{' '}
            <NumberFormat
              value={data.recoveredPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Critical/M:{' '}
            <NumberFormat
              value={data.criticalPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));

  const countries = searchCountry.map((data, index) => (
    <Grid key={index} item xs={12} sm={4} md={2}>
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
          <Typography component="p" variant="body2">
            Total Cases:{' '}
            <NumberFormat
              value={data.cases}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recovered:{' '}
            <NumberFormat
              value={data.recovered}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Death:{' '}
            <NumberFormat
              value={data.deaths}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Active:{' '}
            <NumberFormat
              value={data.active}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Critical:{' '}
            <NumberFormat
              value={data.critical}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Test:{' '}
            <NumberFormat
              value={data.tests}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <hr />
          <Typography
            style={{
              fontStyle: 'italic',
              fontWeight: 'bold',
              color: '#03a9f4',
            }}
            component="p"
            variant="body2"
          >
            Last 24 Hours
          </Typography>

          <Typography component="p" variant="body2">
            Cases:{' '}
            <NumberFormat
              value={data.todayCases}
              displayType={'text'}
              thousandSeparator={true}
              style={{ color: '#ff5722' }}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Death:{' '}
            <NumberFormat
              value={data.todayDeaths}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recovered:{' '}
            <NumberFormat
              value={data.todayRecovered}
              displayType={'text'}
              thousandSeparator={true}
              style={{ color: '#009688' }}
            />
          </Typography>
          <hr />
          <Typography component="p" variant="body2">
            Cases/M:{' '}
            <NumberFormat
              value={data.casesPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Deaths/M:{' '}
            <NumberFormat
              value={data.deathsPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Tests/M:{' '}
            <NumberFormat
              value={data.testsPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Population:{' '}
            <NumberFormat
              value={data.population}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Case/People:{' '}
            <NumberFormat
              value={data.oneCasePerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Death/People:{' '}
            <NumberFormat
              value={data.oneDeathPerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            1Test/People:{' '}
            <NumberFormat
              value={data.oneTestPerPeople}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Active/M:{' '}
            <NumberFormat
              value={data.activePerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Recoveres/M:{' '}
            <NumberFormat
              value={data.recoveredPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
          <Typography component="p" variant="body2">
            Critical/M:{' '}
            <NumberFormat
              value={data.criticalPerOneMillion}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ));
  return (
    <div className="countryData">
      <h1 className="worldHeader">200+ Countries</h1>
      <div className="srcBox">
        <FormControl className={classes.formControl}>
          <InputLabel id="srclevel">Type country name</InputLabel>
          <Input
            type="text"
            labelid="srclevel"
            onChange={setCountrysearchHandler}
            placeholder="Country name..."
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="selectLabel">Select</InputLabel>
          <Select
            labelId="selectLabel"
            value={selectItem}
            onChange={(e) => setSelectitem(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Most Affected Country">
              Most Affected Country
            </MenuItem>
            <MenuItem value="Less Affected Country">
              Less Affected Country
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={3}>
        {!dataLoad ? (
          <CircularProgress
            style={{ margin: '0 auto' }}
            size={140}
            color="secondary"
            thickness={1.6}
          />
        ) : (
          <div></div>
        )}

        {selectItem !== '' ? selectSrcData : <div></div>}

        {countries}
      </Grid>
    </div>
  );
}

export default CountryData;
