import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { countryStyles } from './AppStyles';
import numeral from 'numeral';

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
          const formattedCase = numeral(d.cases).format('0.0a');         
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
          label: 'Cases',
          data: chartLabelData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
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
            <div className="_chart">{dataload ? <Bar data={chartData} /> : <></>}</div>
          </Grid>
         
          <Grid className={classes.chartClass} item xs={6}>
            <div  className="_chart">
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
