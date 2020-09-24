import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { countryStyles } from './AppStyles';

function BarChart() {
  const [chartData, setChartData] = useState([]);
  const [chartLabelData, setData] = useState([]);
  const [chartLabel, setLabel] = useState([]);
  const [dataload, setDataload] = useState(false);

  const classes = countryStyles();

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries?sort=cases&allowNull=true')
      .then((res) => res.json())
      .then((data) => {
        data.splice(0, 30).map((d) => {
          setLabel((l) => [...l, d.country]);
          setData((dd) => [...dd, d.cases]);
        });
        setDataload(true);
      })
      .then(() => chart())
      .catch((err) => {
        alert(err);
      });
  }, [dataload]);

  const chart = () => {
    setChartData({
      labels: chartLabel,
      datasets: [
        {
          label: 'Covid Cases',
          data: chartLabelData,
          backgroundColor: [
            '#63b598',
            '#ce7d78',
            '#ea9e70',
            '#a48a9e',
            '#c6e1e8',
            '#648177',
            '#0d5ac1',
            '#f205e6',
            '#1c0365',
            '#14a9ad',
            '#4ca2f9',
            '#a4e43f',
            '#d298e2',
            '#6119d0',
            '#d2737d',
            '#c0a43c',
            '#f2510e',
            '#651be6',
            '#79806e',
            '#61da5e',
            '#cd2f00',
            '#9348af',
            '#01ac53',
            '#c5a4fb',
            '#996635',
            '#b11573',
            '#4bb473',
            '#75d89e',
            '#2f3f94',
            '#2f7b99',
          ],
          borderWidth: 1,
        },
      ],
    });
  };

  return (
    <div className="bar__chart">
      <h2>Top 30 Affected Country</h2>
      <Grid container spacing={3}>
        <Grid className={classes.chartClass} item xs={6}>
          <div>{dataload ? <Bar data={chartData} /> : <></>}</div>
        </Grid>
        <Grid className={classes.chartClass} item xs={6}>
          <div>
            {dataload ? (
              <Doughnut
                data={chartData}
                options={{
                  legend: {
                    display: false,
                  },
                }}
              />
            ) : (
              <></>
            )}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default BarChart;
